import React, { useRef, useState } from "react";
import sajek from '../../Images/Image/Sajek.png';
import sreemongol from '../../Images/Image/Sreemongol.png';
import sundorbon from '../../Images/Image/sundorbon.png';
// Import Swiper React components
// import Swiper from 'swiper';
// import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Pagination } from 'swiper'


// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

import "./style.css";



const SwiperPicture = () => {
    return (
        <>
            <Swiper slidesPerView={3} spaceBetween={30} pagination={{
                "clickable": true
            }} className="mySwiper">
                <SwiperSlide><img src={sajek} alt="" /></SwiperSlide><SwiperSlide><img src={sreemongol} alt="" /></SwiperSlide><SwiperSlide><img src={sundorbon} alt="" /></SwiperSlide><SwiperSlide><img src={sajek} alt="" /></SwiperSlide><SwiperSlide><img src={sreemongol} alt="" /></SwiperSlide><SwiperSlide><img src={sundorbon} alt="" /></SwiperSlide><SwiperSlide><img src={sajek} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default SwiperPicture;