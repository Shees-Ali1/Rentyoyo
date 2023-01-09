import React from 'react'
import { useState } from 'react';

import Calendar from 'react-calendar'
// import { Timeit } from 'react-timeit'
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

function ReturnRentee() {


    const [showHours, setShowHours] = useState(false);
    const [showMinutes, setShowMinutes] = useState(false);
    const [showAmPm, setShowAmPm] = useState(false);


    const [hoursTxt, setHoursTxt] = useState(0);
    const [minutesTxt, setMinutesTxt] = useState(0);
    const [amPmTxt, setAmPmTxt] = useState('AM');

    const data = [
        {
            hours: "01"
        },
        {
            hours: "02"
        },
        {
            hours: "03"
        },
        {
            hours: "04"
        },
        {
            hours: "05"
        },
        {
            hours: "06"
        },
        {
            hours: "07"
        },
        {
            hours: "08"
        },
        {
            hours: "09"
        },
        {
            hours: "10"
        },
        {
            hours: "11"
        },
        {
            hours: "12"
        },




    ]



    const minutes = [
        {
            minutes: "05"
        },
        {
            minutes: "10"
        },
        {
            minutes: "15"
        },
        {
            minutes: "20"
        },
        {
            minutes: "25"
        },
        {
            minutes: "30"
        },
        {
            minutes: "35"
        },
        {
            minutes: "40"
        },
        {
            minutes: "45"
        },
        {
            minutes: "50"
        },
        {
            minutes: "55"
        },
        {
            minutes: "60"
        },
    ]

    const amPm = [
        {
            amPm: 'AM'


        },
        {
            amPm: 'PM'


        }
    ]

    const hoursClicked = () => {


        setShowHours(!showHours)

    }


    const minutesClicked = () => {


        setShowMinutes(!showMinutes)


    }

    const amPmClicked = () => {
        setShowAmPm(!showAmPm)
    }

    const hourSelectClicked = (hours) => {

        setHoursTxt(hours)
        setShowHours(!showHours)


    }

    const minutesSelectClicked = (minutes) => {

        setMinutesTxt(minutes)
        setShowMinutes(!showMinutes)
    }

    const amPmSelectClicked = (amPm) => {
        setAmPmTxt(amPm)
        setShowAmPm(!showAmPm)
    }
  return (
    <>
    <div className='Pickup-Main'>
        <Link to={'/RenteeChat'}>
        <div className='Return-btn'>
            {/* <IoIosArrowBack className='Return-icon' /> */}
            <div className='MainBtn'>Return</div>
        </div>
        </Link>
        <div className='MainShade-box'>
            <div className='Heading'>Return location date & time</div>
        </div>
    </div>


    <div className='Heading-Pickup'>
        Return / Pickup
    </div>
    <div className='Top-card'>
        <div className='border-content'>
            <div className='Main-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis placeat eius enim nulla voluptatibus, maxime aliquid necessitatibus doloremque laboriosam earum quas corrupti esse hic.</div>
        </div>
        <div className='border-content'>
            <div className='SecBox-content'>Select One</div>
            <div class="form-check">
                <div class="styled-input-single">
                    <input type="radio" name="fieldset-3" id="radio3-example-three" />
                    <label class="form-check-label" for="radio3-example-three">Delivery</label>
                </div>
            </div>
            <div class="Secform-check">
                <div class="styled-input-single">
                    <input type="radio" name="fieldset-3" id="radio3-example-three" />
                    <label class="form-check-label" for="radio3-example-three">Pick up</label>
                </div>
            </div>


        </div>
    </div>


    <div className='Sec-card'>
        <div className='Secborder-content'>
            <div className='calendar-Head'>Pick a date and Time</div>
            <Calendar className="react-calendar" />
        </div>
        <div className='border-content'>
            <div className='SecBox-content'>Select One</div>
            <div className='Timer-Main'>
                <div className='topHours'>
                    <div className='Hours'
                        onClick={hoursClicked}
                    >
                        {hoursTxt}


                    </div>
                    {showHours && <div className='cardHours'>

                        {data.map((item) => (

                            <div className='hoursTxt'
                                onClick={() => hourSelectClicked(item.hours)}
                            >
                                {
                                    item.hours
                                }

                            </div>

                        ))}

                    </div>
                    }
                </div>




                <div className='Timer-Coln'>:</div>



                <div className='topHours'>
                    <div className='Hours'
                        onClick={minutesClicked}
                    >
                        {minutesTxt}


                        {showMinutes && <div className='SecCardHours'>

                            {minutes.map((item) => (

                                <div className='hoursTxt'
                                    onClick={() => minutesSelectClicked(item.minutes)}
                                >
                                    {
                                        item.minutes
                                    }

                                </div>

                            ))}

                        </div>
                        }
                    </div>

                </div>

                <div className='topHours'>
                    <div className='D-N' onClick={amPmClicked}>
                        {amPmTxt}
                    </div>
                    {showAmPm && <div className='AmPMCardHours'>

                        {amPm.map((item) => (

                            <div className='hoursTxt'
                                onClick={() => amPmSelectClicked(item.amPm)}
                            >
                                {
                                    item.amPm
                                }

                            </div>

                        ))}

                    </div>
                    }

                </div>
            </div>
        </div>
    </div>
    <div className='Btn-parent'>
        <div className='ThrdNext-Btn'>
            <Link to={'/MainList'}>
                <button className='SecNxt-Btn'>Next</button>
            </Link>
        </div>
    </div>

</>
  )
}

export default ReturnRentee
