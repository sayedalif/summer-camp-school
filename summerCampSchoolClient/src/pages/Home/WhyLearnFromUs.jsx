import lens from '../../assets/images/lens.webp';
import { IoIosCheckmarkCircle } from "react-icons/io";

const WhyLearnFromUs = () => {
  return (
    <div className='mb-24 relative'>
      <img loading="lazy" className='lg:w-[79rem] lg:mx-auto lg:h-auto rounded-lg' src={lens} alt="why section image" />

      <div className='lg:absolute md:absolute sm:absolute absolute lg:top-[30%] md:top-[25%] sm:top-[30%] top-0 text-[#FEFEFF] lg:left-16 md:left-10 sm:left-10 left-5'>
        <h1 className='lg:text-4xl lg:pt-0 md:text-2xl md:pt-0 sm:text-2xl lg:mb-8 md:mb-3 sm:mb-2 sm:pt-0 mb-0 text-xl capitalize pt-4'>why learn from ShutterCraft</h1>
        {/* this text has been turn off because of not enough space in small devices */}
        <p className='lg:w-1/2 lg:text-xl lg:mb-8 lg:block md:w-[65%] md:mb-3 md:block sm:w-1/2 sm:mb-8 w-[65%] mb-0 hidden'>Looking to expand your skill and explore your creativity in photography? our hands-on creative classes are the perfect way to learn at your own pace and discover your photography talents.</p>
        <div className='pt-3'>
          <p className='capitalize lg:flex md:flex sm:flex flex lg:items-center md:items-center sm:items-center gap-2 mb-3'><IoIosCheckmarkCircle className='border rounded-full' size={24} />expert instruction</p>
          <p className='capitalize lg:flex md:flex sm:flex flex lg:items-center md:items-center sm:items-center gap-2 mb-3'><IoIosCheckmarkCircle className='border rounded-full' size={24} />collaborative learning</p>
          <p className='capitalize lg:flex md:flex sm:flex flex lg:items-center md:items-center sm:items-center gap-2 mb-3'><IoIosCheckmarkCircle className='border rounded-full' size={24} />einnovative curriculum</p>
        </div>
      </div>
    </div>
  );
};

export default WhyLearnFromUs;