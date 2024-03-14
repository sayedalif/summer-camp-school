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
import Container from "../../../components/Container";



const Banner = () => {
  return (
    <>
      <Container>
        <Swiper pagination={{
          dynamicBullets: true,
        }}
          modules={[Pagination]}
          className="mySwiper w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
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
      </Container>
    </>
  );
};

export default Banner;