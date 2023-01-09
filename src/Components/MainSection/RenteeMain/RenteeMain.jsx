import React from 'react'
import SwiperMain from '../Swiper/SwiperMain'
import Swiper from '../Swiper/SwiperMain'
import './RenteeMain.css'



export default function RenteeMain() {
  return (
    <div>
        <div className='FirstSectionMain'>
          <div className='Rentee-Heading'>
            <div className='RenteeHead'>Top Item Rent Today</div>
          </div> 
           
          <div className='Rentee-Content'>
            <div className='RenteeContentHead'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ad dolores earum debitis ea consectetur laborum veritatis officia eum soluta animi reprehenderit ullam, assumenda nesciunt aliquid ab ratione officiis?
              Autem efficitur.
            </div>
          </div>

          <div className='SliderMain'>
           <SwiperMain/>
           </div>
        </div>
    </div>
  )
}
