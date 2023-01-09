import React from 'react'
import { Link } from 'react-router-dom'
import './Party.css'

import PartyArr from './PartyArry'


function Party() {
    return (
        <>
            <div className='PartyMain'>
                <div className='Return-btn'>
                    <Link to={'/RenteeMain'}>
                    {/* <IoIosArrowBack className='Return-icon'/> */}
                    <div className='MainBtn'>Return</div>
                    </Link>
                </div>
                <div className='MainShade-box'>
                    <div className='Heading'>Party</div>
                </div>




                <div className='PartyCards'>


                {PartyArr.map((ite,index)=>{
                return(
                    <div className='MainFirstCard'>
                {ite.map((item,arr)=>
                    <div className='FirstPartyCard'>
                        <div className='ImgPrnt'>
                        <div className='StyleCheckBox'>
                            {/* <input  type='checkbox' /> */}
                            <div className='clrCheckBox'></div>
                        </div>

                        <div className='ShadeImg'>
                            <div >
                                <img className='SecPartyMainImg' src={item.image} />
                            </div>
                        </div>
                        </div>


                        <div className='Content'>
                            <div>
                                <div className='ContentName'>{item.name}</div>
                                <div className='ContentDesc'>{item.content}</div>
                            </div>
                            <div className='ContentPrice'>{item.price}</div>
                            <div className='SenderDetail'>
                                <div >
                                    <img className='ImgChat' src={item.icon}/> 
                                </div>
                                <div>
                                    {item.chatName}
                                </div>
                                </div>
                        </div>



                    </div>)}
                    </div>)}
)}



                    <div className='MainPages'>

                 
                        <div className='borderPage'>
                            <Link to={'/Pages'}> 
                                 <div className='SizePage'>1</div>
                            </Link>                       
                        </div>
                     

                        <div className='SecborderPage'>
                        <Link to={'/Pages'}> 
                            <div className='SecSizePage'>2</div>
                            </Link> 
                        </div>

                        <div className='SecborderPage'>
                        <Link to={'/Pages'}> 
                            <div className='SecSizePage'>3</div>
                            </Link> 
                        </div>

                        <div className='SecborderPage'>
                            <div className='SecSizePage'>4</div>
                        </div>



                        <div>
                             <div className='dots'></div>
                        </div>
                        <div>
                             <div className='dots'></div>
                        </div>
                        <div>
                             <div className='dots'></div>
                        </div>



                        <div className='SecborderPage'>
                            <div className='SecSizePage'>10</div>
                        </div>


                    </div>
                </div>
            </div>
                        <Link to={'/RenteePickUp'}>
                        <div className='Btn-parent'>
                          <div className='ThrdNext-Btn'>
                             <button className='SecNxt-Btn'>Next</button>
                            </div>
                        </div>
                         </Link>


        </>
    )
}

export default Party