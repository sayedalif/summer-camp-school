import { useEffect, useState } from 'react';
import BwArrowButton from '../../../components/BwArrowButton';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import CurriculumButton from '../../../components/CurriculumButton';

const Curriculum = () => {
  const [axiosPublic] = useAxiosPublic();

  const [curriculum, setCurriculum] = useState([]);
  // console.log("🚀 ~ Curriculum ~ curriculum:", curriculum);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosPublic.get('/curriculum');
      const data = await response.data;

      setCurriculum(data);
    }
    fetchData();
  }, [axiosPublic]);
  return (
    <div className='md:mx-8 md:my-16'>
      <div className='xl:flex lg:flex md:flex justify-between'>

        {/* texts */}
        <div className='font-semibold lg:text-5xl md:text-3xl sm:text-2xl text-2xl mb-4'>
          <h1><span className='capitalize'>new skills</span> with ShutterCraft.</h1>
          <p><span className='capitalize'>a detailed look</span> at <span className='capitalize'>our curriculum</span></p>
        </div>

        <div>
          <p className='font-semibold lg:text-xl md:text-xl sm:text-lg text-lg mb-6'>With real world project to create and <br /> online classes that fit a busy schedule</p>
          <BwArrowButton text={'get started'} to={'/'}></BwArrowButton>
        </div>
      </div>

      {/* carriculum cards */}
      <div className='xl:flex lg:flex lg:flex-row lg:justify-between lg:space-y-0 lg:w-full md:flex md:flex-row md:space-x-4 md:space-y-0 md:my-16 md:w-full my-10  sm:w-full space-y-5 flex flex-col items-center'>

        {
          curriculum.map((eachCurriculum, index) => {
            {/* console.log(eachCurriculum); */ }
            return (
              <div
                key={eachCurriculum._id}
                className={`card lg:w-[32rem] lg:h-[32rem] md:h-[40rem] ${index === 1 ? 'lg:w-[42rem] bg-[#C3FFD2]' : ''} md:w-full sm:w-full w-full bg-[#AEE5FF] text-black`}>
                <div className="card-body">
                  {/* images */}
                  <img loading="lazy" className='lg:w-40 md:w-36 sm:w-[13rem] w-[10rem] mx-auto' src={eachCurriculum.img} alt="own pace png" />
                  {/* title */}
                  <h2 className="lg:text-2xl md:text-xl  md:font-semibold md:my-4 sm:text-xl text-lg text-center">{eachCurriculum.title}</h2>
                  {/* description */}
                  <p className='font-medium md:text-base'>{eachCurriculum.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className='md:flex md:space-x-8'>
        <h1 className='capitalize md:text-2xl md:font-semibold text-center font-semibold text-2xl mb-8'>our special<br />features  for you</h1>
        <div className='lg:flex lg:flex-wrap lg:space-x-28 md:flex md:flex-wrap grid grid-cols-2'>
          {/* button */}
          <CurriculumButton text={'get certificate'} />
          {/* <button className="btn btn-active bg-[#F1F1F1] outline-none border-none rounded-full capitalize mr-2 mb-4">get certificate</button> */}

          <CurriculumButton text={'amazing instructor'} />
          {/* <button className="btn btn-active bg-[#F1F1F1] outline-none border-none rounded-full capitalize md:mr-2">amazing instructor</button> */}

          <CurriculumButton text={'lifetime support'} />

          {/* <button className="btn btn-active bg-[#F1F1F1] outline-none border-none rounded-full capitalize mr-2">lifetime support</button> */}

          <CurriculumButton text={'video lesson'} />
          {/* <button className="btn btn-active bg-[#F1F1F1] outline-none border-none rounded-full capitalize">video lesson</button> */}
        </div>
      </div>
      <div className="divider text-black my-10"></div>
    </div>
  );
};

export default Curriculum;