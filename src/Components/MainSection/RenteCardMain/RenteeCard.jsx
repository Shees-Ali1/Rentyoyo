import React, { useState } from 'react'
import './RenteeCard.css'

import RenteeCardsArr from './RenteeCardsArr'

import BtmImg from '../../Images/BtmImg.png'
import { Link } from 'react-router-dom'




export default function RenteeCard() {

    const[firstSection, setFirstSection] = useState()

function handleSection(){
    setFirstSection(!firstSection)
}
 


    return (
        <>
            <div className='CardMain'>
                <div className='CardContent'>
                    <div className='CardName'> Categories</div>




                        <div className='MainCards'>
                    {RenteeCardsArr.map((item,index)=>
                    <div className='CategorySec'>
                        <div className='MaincardBox'>
                            <img className='cardBox' src={item.cardsImg} />
                        </div>
                        <Link to={'/PartyMain'}>
                        <div className='cardBtn'>
                            <button className='cardBtn'>{item.btnName}</button>
                        </div>
                        </Link>
                    </div>
                    )}
                    </div>
                {firstSection ?
                    <div className='MainCards'>
                    {RenteeCardsArr.map((item,index)=>
                    <div className='CategorySec'>
                        <div className='MaincardBox'>
                            <img className='cardBox' src={item.cardsImg} />
                        </div>
                        <div className='cardBtn'>
                            <button className='cardBtn'>{item.btnName}</button>
                        </div>
                    </div>
                    )}
                    </div>
                :""}
                {firstSection ?
                    <div className='MainCards'>
                    {RenteeCardsArr.map((item,index)=>
                    <div className='CategorySec'>
                        <div className='MaincardBox'>
                            <img className='cardBox' src={item.cardsImg} />
                        </div>
                        <div className='cardBtn'>
                            <button className='cardBtn'>{item.btnName}</button>
                        </div>
                    </div>
                    )}
                    </div>
                :""}
                    <div className='MainViewBtn'>
                    <button className='ViewBtn' onClick={handleSection}>View all</button>
                    </div>
                </div>
            </div>


            <div className='BottomImg'>
                <div className='BottomImgStyle'>
                    <img className='ImgBtm' src={BtmImg}/>
                    <div className='InnerImg'>
                        <div className='ImgHeading'>Available for Rent</div>
                    </div>
                   
                </div>
            </div>
        </> 
    )
}
