import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

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
        className="mySwiper w-full"
      >
        <SwiperSlide className="aspect-w-1 aspect-h-1">
          <img className="xl:rounded-xl md:rounded-md sm:rounded-sm object-cover" src={macroPhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide className="aspect-w-1 aspect-h-1">
          <img className="xl:rounded-xl md:rounded-md sm:rounded-sm object-cover" src={abstractPhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide className="aspect-w-1 aspect-h-1">
          <img className="xl:rounded-xl md:rounded-md sm:rounded-sm object-cover" src={AdventurePhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide className="aspect-w-1 aspect-h-1">
          <img className="xl:rounded-xl md:rounded-md sm:rounded-sm object-cover" src={AstroPhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide className="aspect-w-1 aspect-h-1">
          <img className="xl:rounded-xl md:rounded-md sm:rounded-sm object-cover" src={FineartPhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide className="aspect-w-1 aspect-h-1">
          <img className="xl:rounded-xl md:rounded-md sm:rounded-sm object-cover" src={RealestatePhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide className="aspect-w-1 aspect-h-1">
          <img className="xl:rounded-xl md:rounded-md sm:rounded-sm object-cover" src={ScientificPhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide className="aspect-w-1 aspect-h-1">
          <img className="xl:rounded-xl md:rounded-md sm:rounded-sm object-cover" src={streetPhoto} alt="" />
        </SwiperSlide>
      </Swiper>

    </>
  );
};

export default Banner;