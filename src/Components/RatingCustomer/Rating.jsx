import React, { useState } from 'react'
import './Rating.css'
import { IoIosArrowBack } from 'react-icons/io';
import Slider from './RatingSlider/slider';
import { Link } from 'react-router-dom';


export default function Rating() {
    const [confirmRatingRenter, setConfirmRatingRenter]=useState(true);
    const [confirmCustomerRating, setConfirmCustomerRating]=useState(false);

    return (
    <>
        <div className='Confirm-Main'>
            <Link to={'/Confirmation'}>
            <div className='Return-btn'>
                {/* <IoIosArrowBack className='Return-icon' /> */}
                <div className='MainBtn'>Return</div>
            </div>
            </Link>
        </div>

       {confirmRatingRenter && 
            <div className="Confim-head">
            Please rate the renter:
            <Slider/>
            </div>
        }

        {confirmCustomerRating && 
        <div className="Confim-head">
        Please rate the customer:
        <Slider/>
        </div>


        }
        <div className='Btn-parent'>
                        <div className='ThrdNext-Btn'>
                            <Link to={'/Reviews'}>
                            <button className='SecNxt-Btn'>Next</button>
                            </Link>
                        </div>
                    </div>
    </>
    )
}
