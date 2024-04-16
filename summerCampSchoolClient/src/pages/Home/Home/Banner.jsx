import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import macroPhoto from "../../../assets/images/macro photography.jpg";
import abstractPhoto from "../../../assets/images/abstract photography.jpg";
import AdventurePhoto from "../../../assets/images/Adventure photography.jpg";
import AstroPhoto from "../../../assets/images/Astrophotography.jpg";
import FineartPhoto from "../../../assets/images/Fine art photography.jpg";
import RealestatePhoto from "../../../assets/images/Real estate photography.jpg";
import ScientificPhoto from "../../../assets/images/Scientific photography.jpg";
import streetPhoto from "../../../assets/images/street photography.jpg";
import useAxiosPublic from "../../../hooks/useAxiosPublic";



const Banner = () => {
  const bannerImages = [macroPhoto, abstractPhoto, AdventurePhoto, AstroPhoto, FineartPhoto, RealestatePhoto, ScientificPhoto, streetPhoto];

  const [axiosPublic] = useAxiosPublic();

  const [banners, setBanners] = useState([]);
  console.log("🚀 ~ Banner ~ banner:", banners);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('banner.json')
      const data = await response.json();
      setBanners(data);
      // console.log(data);
    }

    fetchData();
  }, [axiosPublic]);

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-[30px]"
      >


        {banners && Array.isArray(banners) && banners.map((banner, idx) => {
          return (
            <SwiperSlide key={idx} className="aspect-w-1 aspect-h-1 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
              <div className="relative h-full">
                <img loading="lazy" className="block w-full lg:h-[35rem] md:h-[30rem] sm:h-[25rem] h-[18rem] rounded object-cover" src={banner.image} alt="" />
                <div className="absolute top-1/2 transform -translate-y-1/2 w-1/2 left-8">
                  <h1 className="lg:text-3xl lg:font-bold lg:mb-2 text[#333333]">{banner.title}</h1>
                  <p className="lg:text-lg text-[#333333] lg:font-bold">{banner.description}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}

        {/*         <SwiperSlide className="aspect-w-1 aspect-h-1 h-auto">
          <img loading="lazy" className="block w-full h-[35rem] rounded xl:rounded-xl md:rounded-md sm:rounded-sm object-cover" src={macroPhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide className="aspect-w-1 aspect-h-1 h-auto">
          <img loading="lazy" className="block w-full h-[35rem] rounded xl:rounded-xl md:rounded-md sm:rounded-sm object-cover" src={abstractPhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide className="aspect-w-1 aspect-h-1 h-auto">
          <img loading="lazy" className="block w-full h-[35rem] rounded xl:rounded-xl md:rounded-md sm:rounded-sm object-cover" src={AdventurePhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide className="aspect-w-1 aspect-h-1 h-auto">
          <img loading="lazy" className="block w-full h-[35rem] rounded xl:rounded-xl md:rounded-md sm:rounded-sm object-cover" src={AstroPhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide className="aspect-w-1 aspect-h-1 h-auto">
          <img loading="lazy" className="block w-full h-[35rem] rounded xl:rounded-xl md:rounded-md sm:rounded-sm object-cover" src={FineartPhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide className="aspect-w-1 aspect-h-1 h-auto">
          <img loading="lazy" className="block w-full h-[35rem] rounded xl:rounded-xl md:rounded-md sm:rounded-sm object-cover" src={RealestatePhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide className="aspect-w-1 aspect-h-1 h-auto">
          <img loading="lazy" className="block w-full h-[35rem] rounded xl:rounded-xl md:rounded-md sm:rounded-sm object-cover" src={ScientificPhoto} alt="" />
        </SwiperSlide>

        <SwiperSlide className="aspect-w-1 aspect-h-1 h-auto">
          <img loading="lazy" className="block w-full h-[35rem] rounded xl:rounded-xl md:rounded-md sm:rounded-sm object-cover" src={streetPhoto} alt="" />
        </SwiperSlide>
         */}
      </Swiper>

    </>
  );
};

export default Banner;