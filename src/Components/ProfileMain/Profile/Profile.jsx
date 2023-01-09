import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <>
        <div className='boxProfile'>
                <div className='MainShade-box'>
                    <div className='Heading'>Profile</div>
                </div>
                </div>
            <div className='profileMain'>



                <div className='Maincards'>

                    <div className='profileCard'>
                        <div className='profileCardHead'>
                            <div className='head-Name'>Payment Detail:</div>
                        </div>

                        <div className='MainInput-Section'>
                        <div className='Main-Inputs'>
                            <div className='profileCardsInput'>
                                <div className='inputName'>Name on Card:</div>
                                <div className='inputName'>Card Number:</div>
                                <div className='inputName'>Address:</div>
                            </div>
                            <div className='main-InputBars'>
                                <input className='InputSize' />
                                <input className='InputSize' />
                                <input className='InputSize' />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>


                <div className='Maincards'>

                    <div className='profileCard'>
                            <div className='FirstHeading-SecProfile'>
                                <div className='HeadTextProfile'>Is payment address the same as mailing addrees?</div>
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
                        <div className='profileCardHead'> 
                            <div className='head-Name'>If no, enter the mailing address below:</div>
                        </div>
                        <div className='MainInput-Section'>
                        <div className='Main-Inputs'>
                            <div className='profileCardsInput'>
                                <div className='inputName'>Street Address:</div>
                                <div className='inputName'>City & Address:</div>
                                <div className='inputName'>Zip Code:</div>
                            </div>

                            <div className='main-InputBars'>
                                <input className='InputSize' />
                                <input className='InputSize' />
                                <input className='InputSize' />
                            </div>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className='Btn-parent'>
                    <div className='ThrdNext-Btn'>
                        <Link to={'/AddListItem'}>
                        <button className='SecNxt-Btn'>List Items</button>
                        </Link>
                    </div>
                </div>
        </>

    )
}

export default Profile
