import React from 'react'
import './SwiperMain.css'
import GiftImg from'../../Images/GiftImg.png'
import "swiper/css/bundle";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination,  } from "swiper";

function SwiperMain() {
  return (
    <>
    <Swiper
      effect={"coverflow"}
      grabCursor={false}
      centeredSlides={true}
      slidesPerView={"3"}
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      }}
      loop={true}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
      <div className='firstImage'>
        <img src={GiftImg} />
        <div className='ImgTextMain'>Gift
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='firstImage'>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='firstImage'>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </div>
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default SwiperMain