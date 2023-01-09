import React from 'react'
import './ListCart.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function ListCart() {
    const inputRef = useRef(null);

    const handleClick = (files) => {
        // 👇️ open file input box on click of other element
        inputRef.current.click();
    };

    const handleFileChange = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }

        console.log('fileObj is', fileObj);

        // 👇️ reset file input
        event.target.value = null;

        // 👇️ is now empty
        console.log(event.target.files);

        // 👇️ can still access file object here
        console.log(fileObj);
        console.log(fileObj.name);
    };

    const options = [
        'Gift', 'Party', 'Wedding'
    ]
    return (
        <>


            <div className='boxProfile'>
                <div className='MainShade-box'>
                    <div className='Heading'>Profile</div>
                </div>
           



            <div className='MainListingsCards'>
                <div className='listCartBoxHeading'>Items 1</div>
                <div className='mainListCart'>
                    <div className='mainDropDownSec'>
                        <div className='SecDropDown'>
                            <div className='heading-Cart'>Select Category:</div>
                            <div className='heading-Cart'>Describe items:</div>
                        </div>
                        <div className='mainDropDownSec'>
                            <div className='SecHeadingsDropDown'>
                                <div className='heading-Cart'>Upload Pictures:</div>
                                <div className='heading-Cart'>Daily Rental Price in Dollars:</div>
                                <div className='heading-Cart'>Number of days item is available for rent:</div>
                                <div className='heading-Cart'>Rental Start Date:</div>
                                <div className='heading-Cart'>Delivery Available?</div>
                            </div>
                        </div>
                    </div>

                    <div className='ScndDropDown'>
                        <Dropdown options={options} placeholder="Select an option" />
                        <div><textarea rows='4' cols='50' className='DescribeInput' placeholder='Type Here' /></div>
                        <div className="uploadPictures">
                            <input
                                style={{ display: 'none' }}
                                ref={inputRef}
                                type="file"
                                onChange={handleFileChange}
                                />
                            <button className='picBtnTxt' onClick={handleClick} >Upload Pictures</button>
                        </div>
                        <Dropdown options={options} placeholder="Select an option" />
                        <div>  <input className='dropDownInputBar' /></div>
                        <div>  <input className='dropDownInputBar' /></div> 
                        <div>
                            <div className='inputsCartSec'>
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

                        {/* MAIN-SECOND-CARD */}

            <div className='MainListingsCards'>
                <div className='listCartBoxHeading'>Items 2</div>
                <div className='mainListCart'>
                    <div className='mainDropDownSec'>
                        <div className='SecDropDown'>
                            <div className='heading-Cart'>Select Category:</div>
                            <div className='heading-Cart'>Describe items:</div>
                        </div>
                        <div className='mainDropDownSec'>
                            <div className='SecHeadingsDropDown'>
                                <div className='heading-Cart'>Upload Pictures:</div>
                                <div className='heading-Cart'>Daily Rental Price in Dollars:</div>
                                <div className='heading-Cart'>Number of days item is available for rent:</div>
                                <div className='heading-Cart'>Rental Start Date:</div>
                                <div className='heading-Cart'>Delivery Available?</div>
                            </div>
                        </div>
                    </div>

                    <div className='ScndDropDown'>
                        <Dropdown options={options} placeholder="Select an option" />
                        <div><textarea rows='4' cols='50' className='DescribeInput' placeholder='Type Here' /></div>
                        <div className="uploadPictures">
                            <input
                                style={{ display: 'none' }}
                                ref={inputRef}
                                type="file"
                                onChange={handleFileChange}
                                />
                            <button className='picBtnTxt' onClick={handleClick} >Upload Pictures</button>
                        </div>
                        <Dropdown options={options} placeholder="Select an option" />
                        <div>  <input className='dropDownInputBar' /></div>
                        <div>  <input className='dropDownInputBar' /></div> 
                        <div>
                            <div className='inputsCartSec'>
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


            </div>
            <div className='Btn-parent'>
                    <div className='ThrdNext-Btn'>
                        <Link to={'/RenteedItems'}>
                        <button className='SecNxt-Btn'>Confirmed</button>
                        </Link>
                    </div>
                </div>






        </>
    )
}

export default ListCart
