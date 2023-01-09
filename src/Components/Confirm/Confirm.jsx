import React from 'react'
import { useState } from 'react';
import './Confirm.css'
import { Link } from 'react-router-dom';

import { IoIosArrowBack } from 'react-icons/io';

export default function Confirm() {
    const [confirmPickup, setconfirmPickup] = useState(true);
    const [confirmList, setconfirmList] = useState(false);
    const [confirmTransaction, setconfirmTransaction] = useState(false);
    return (
        <>
            <div className='Confirm-Main'>
                <Link to={'/ReturnLocation'}>
                <div className='Return-btn'>
                    {/* <IoIosArrowBack className='Return-icon' /> */}
                    <div className='MainBtn'>Return</div>
                </div>
                </Link>
            </div>
            {confirmPickup &&
                <>
                    <div className="Confim-head">
                        Confirm pickup/return
                        <div className='Pick-Up'>
                            <div class="PickUp-formcheck">
                                <div className='style-form'>
                                    <label class="form-check-label" for="radio3-example-three">Pickup Completed?</label>
                                </div>
                                <div className='inputs'>
                                <div className='style-Input'>
                                    <input className='New-color' type="radio" name="fieldset-3" id="radio3-example-three" />
                                    <label class="form-check-label" for="radio3-example-three">Yes</label>
                                </div>
                                <div className='style-SecInput'>
                                    <input className='New-color' type="radio" name="fieldset-3" id="radio3-example-three" />
                                    <label class="form-check-label" for="radio3-example-three">No</label>

                                </div>
                                </div>
                            </div>
                        </div>


                        <div className='Return'>
                            <div class="PickUp-formcheck">
                                <div className='style-form'>
                                    <label class="form-check-label" for="radio3-example-three">Return Completed?</label>
                                </div>
                                <div className='inputs'>
                                <div className='style-Input'>
                                    <input className='New-color' type="radio" name="fieldset-3" id="radio3-example-three" />
                                    <label class="form-check-label" for="radio3-example-three">Yes</label>
                                </div>
                                <div className='style-SecInput'>
                                    <input className='New-color' type="radio" name="fieldset-3" id="radio3-example-three" />
                                    <label class="form-check-label" for="radio3-example-three">No</label>

                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </>
            }
            {confirmList &&
                <>
                    <div className="Confim-head">
                        Inspect item & approve
                        <div className='Pick-Up'>
                            <div class="SecPickUp-formcheck">
                                <div className='Secstyle-form'>
                                    <label class="form-check-label" for="radio3-example-three">Item in condition described in listing?</label>
                                </div>
                                <div className='inputs'>
                                <div className='Sec-rendering'>
                                    <div className='style-Input'>
                                        <input className='New-color' type="radio" name="fieldset-3" id="radio3-example-three" />
                                        <label class="form-check-label" for="radio3-example-three">Yes</label>
                                    </div>
                                    <div className='style-SecInput'>
                                        <input className='New-color' type="radio" name="fieldset-3" id="radio3-example-three" />
                                        <label class="form-check-label" for="radio3-example-three">No</label>

                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </>

            }
            {confirmTransaction &&

                <div class="SecPickUp-formcheck">
                    <div className='Secstyle-form'>
                        <label class="form-check-label" for="radio3-example-three">Transaction completed?</label>
                    </div>
                    <div className='Sec-rendering'>
                        <div className='style-Input'>
                            <input className='New-color' type="radio" name="fieldset-3" id="radio3-example-three" />
                            <label class="form-check-label" for="radio3-example-three">Yes</label>
                        </div>
                        <div className='style-SecInput'>
                            <input className='New-color' type="radio" name="fieldset-3" id="radio3-example-three" />
                            <label class="form-check-label" for="radio3-example-three">No</label>

                        </div>
                    </div>
                </div>


            }
             <div className='Btn-parent'>
                        <div className='ThrdNext-Btn'>
                            <Link to={'/Rating'}>
                            <button className='SecNxt-Btn'>Next</button>
                            </Link>
                        </div>
                    </div>
        </>
    )
}
