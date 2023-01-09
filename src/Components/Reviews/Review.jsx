import React from 'react'
import './Review.css'
import { IoIosArrowBack } from 'react-icons/io';

import { Link } from 'react-router-dom';

function Review() {
  return (
    <>
    <div className='Review-Main'>
       <div className='Confirm-Main'>
        <Link to={'/Rating'}>
            <div className='Return-btn'>
                {/* <IoIosArrowBack className='Return-icon' /> */}
                <div className='MainBtn'>Return</div>
            </div>
            </Link>
            <div className='MainShade-box'>
                    <div className='Heading'>Reviews</div>
                </div>
        </div>


        <div className='Main-ReviewBox'>
            <div className='Review-box'>
                <div className='ReviewData'>
                <div className='RatingStar'>5 Star </div>
                <div className='RatingNumber'>160</div>
                </div>


                <div className='ReviewData'>
                <div className='RatingStar'>4 Star </div>
                <div className='RatingNumber'>2</div>
                </div>




                <div className='ReviewData'>
                <div className='RatingStar'>3 Star </div>
                <div className='RatingNumber'>1</div>
                </div>



                <div className='ReviewData'>
                <div className='RatingStar'>2 Star </div>
                <div className='RatingNumber'>1</div>
                </div>

                <div className='ReviewData'>
                <div className='RatingStar'>1 Star </div>
                <div className='RatingNumber'>1</div>
                </div>
            </div>
        </div>

    </div>
    <div className='Btn-parent'>
                        <div className='ThrdNext-Btn'>
                            <Link to={'/Payment'}>
                            <button className='SecNxt-Btn'>Next</button>
                            </Link>
                        </div>
                    </div>
    </>
  )
}

export default Review
