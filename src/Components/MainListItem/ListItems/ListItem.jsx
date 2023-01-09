import React from 'react'
import './ListItem.css'
import chatIcon from '../../Images/chatIcon.png'
import Slider from "react-slick";
import ListItemArr from './ListItemArr';
const ListItem = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1500,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1225,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              },
              
            },
            {
              breakpoint: 659,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              },
              
            }
            ,{
              breakpoint: 492,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              },
              
            }
          ]
      };
  return (
    <>
    <div className='MainListSection'>
    <div className='Return-btn'>
        {/* <IoIosArrowBack className='Return-icon' /> */}
        <div className='MainBtn'>Return</div>
    </div>

    <div className='MainShade-box'>
        <div className='Heading'>List items to rent</div>
    </div>

</div>

<div className='SlickMain'>
   
    <Slider {...settings}>

{ListItemArr.map((item)=>(
    <div className='ListItemCard'>
  
        <div className='CardParent'>
            <div className='Main-ImgCard'>
                <img className='Main-ImgCard' src={item.cardsImg} />
            </div>
            <div className='btn-ImgCard'>
                <div className='btn-CardText'>{item.btnName}</div>
            </div>
        </div>

        
 
</div>

))
}
   </Slider>
</div>
</>


  )
}

export default ListItem
