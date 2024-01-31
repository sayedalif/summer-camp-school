import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import macroPhoto from "../../../assets/images/macro photography.jpg";
import abstractPhoto from "../../../assets/images/abstract photography.jpg";
import AdventurePhoto from "../../../assets/images/Adventure photography.jpg";
import AstroPhoto from "../../../assets/images/Astrophotography.jpg";
import FineartPhoto from "../../../assets/images/Fine art photography.jpg";
import RealestatePhoto from "../../../assets/images/Real estate photography.jpg";
import ScientificPhoto from "../../../assets/images/Scientific photography.jpg";
import streetPhoto from "../../../assets/images/street photography.jpg";



const Banner = () => {
  return (
    <>
      <Swiper pagination={{
        dynamicBullets: true,
      }}
        modules={[Pagination]}
        className="mySwiper"
        >
        <SwiperSlide>
        <img className="w-[15rem] max-h-[50rem]" src={macroPhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide>
        <img className="w-[15rem] max-h-[50rem]" src={abstractPhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide>
        <img className="w-[15rem] max-h-[50rem]" src={AdventurePhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide>
        <img className="w-[15rem] max-h-[50rem]" src={AstroPhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide>
        <img className="w-[15rem] max-h-[50rem]" src={FineartPhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide>
        <img className="w-[15rem] max-h-[50rem]" src={RealestatePhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide>
        <img className="w-[15rem] max-h-[50rem]" src={ScientificPhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide>
        <img className="w-[15rem] max-h-[50rem]" src={streetPhoto} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;