import React, { useRef } from 'react'
import './FirstSection.css'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'
import { Link } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';


export default function FirstSection() {

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
    
    
    return (

        <div className='Box'>
            
            <div className='Return-btn'>
                {/* <IoIosArrowBack className='Return-icon'/> */}
                    <div className='MainBtn'>Return</div>
            </div>
            <div className='MainShade-box'>
                <div className='Heading'>Party</div>
            </div>
            <div className='FirstSection-main'>
                <div className='Text-area1'>

                    <p><label className='label-Text' for="w3review">Item descripiton</label></p>

                    <textarea className='style' rows="4" cols="50">
                        Type here
                    </textarea>

                </div>

                <div className="Upload">
                    <p><label>Item Image</label></p>
                    <input
                            style={{display: 'none'}}
                            ref={inputRef}
                            type="file"
                            onChange={handleFileChange}
                        />
                  
                    <button onClick={handleClick} >Upload Pictures</button>
                </div>

                <div className='table-heading'> Availability</div>
                <div className="calendar">

                    <div className='calander-box' >
                        <div className='date-time'>Pick a date and time</div>
                        <Calendar />

                    </div>
                </div>
                <div className='Next-Btn'>
                    <Link to={"/Chat"}>
                        <button className='Nxt-Btn'>Next</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
