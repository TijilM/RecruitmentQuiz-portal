import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from "../Style/carousel.module.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import img1 from "../Assets/img1.jpg"
import img2 from "../Assets/img2.jpg"
import img3 from "../Assets/img3.jpg"
import img4 from "../Assets/img4.jpg"



function Carousel() {
  return (
    <>
      <Swiper id="carouselid"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={styles.swiper}
      >
        {/* <SwiperSlide><img src={img1} alt="ipsum1" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="ipsum2" /></SwiperSlide> */}
        <SwiperSlide className={styles.swiperSlide}><img src="https://picsum.photos/300/400" alt="ipsum3" /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src="https://picsum.photos/300/400" alt="ipsum3" /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src="https://picsum.photos/300/400" alt="ipsum3" /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src="https://picsum.photos/300/400" alt="ipsum3" /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src="https://picsum.photos/300/400" alt="ipsum3" /></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src="https://picsum.photos/300/400" alt="ipsum3" /></SwiperSlide>

      </Swiper>
    </>
  );
}

export default Carousel