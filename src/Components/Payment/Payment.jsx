import React from 'react'
import './Payment.css'
import { IoIosArrowBack } from 'react-icons/io';
import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';



function Payment() {
  return (
    <div>
      <div className='Confirm-Main'>
        <Link to={'/Reviews'}>
            <div className='Return-btn'>
                {/* <IoIosArrowBack className='Return-icon' /> */}
                <div className='MainBtn'>Return</div>
            </div>
            </Link>
            <div className='MainShade-box'>
                    <div className='Heading'>Payments</div>
                </div>
        </div>

        <div className='MainPayment'>
            <div className='Payment-box'>
                <div className='boxContent'>
                    <div className='contentName'>Deposit</div>
                    <div className='PaymentIcon'><MdArrowForwardIos/></div>
                </div>


                <div className='boxContent'>
                    <div className='contentName'>Tax Information</div>
                    <div className='PaymentIcon'><MdArrowForwardIos/></div>
                </div>
                
                
                <div/>

             </div>
        </div>

                            <Link to={'/RenteeMain'}>
                        <div className='Btn-parent'>
                        <div className='ThrdNext-Btn'>
                             <button className='SecNxt-Btn'>Next</button>
                         
                        </div>
                    </div>
                       </Link>
    
    </div>
  )
}

export default Payment
