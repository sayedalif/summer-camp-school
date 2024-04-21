import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import useBanner from '../../hooks/useBanner';

const Banner = () => {
  // from the hooks

  const { banners, isLoading } = useBanner();
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-[30px]"
      >


        {
          banners && Array.isArray(banners) && banners.map((banner, idx) => {
            return (
              <SwiperSlide key={idx} className="aspect-w-1 aspect-h-1 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="relative h-full">
                  <img className="block w-full lg:h-[35rem] md:h-[30rem] sm:h-[25rem] h-[13rem] rounded object-cover" src={banner.image} alt="banner images" />
                  <div className="absolute top-24 transform -translate-y-1/2 lg:w-[65%] md:w-[100%] sm:w-[100%] w-[100%] banner-text-bg">
                    <div className="pl-4 pt-2 pb-2 md:pr-4">
                      {/* photography names */}
                      <h1 className="lg:text-3xl lg:font-bold lg:mb-2 md:text-2xl md:font-medium md:mb-1 sm:text-xl sm:font-normal sm:mb-1 text-xl text[#333333] text-center">{banner.title}</h1>
                      {/* photography description */}
                      <p className="lg:text-lg text-[#333333] lg:font-bold md:text-lg md:font-normal sm:text-md sm:font-normal sm:mb-1 text-left lg:w-[35rem] lg:block md:block sm:block hidden">{banner.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </>
  );
};

export default Banner;