import usePopularInstructor from "../../hooks/usePopularInstructor";

const PopularInstructor = () => {

  const { popularInstructors, isLoading } = usePopularInstructor();
  console.log("🚀 ~ PopularInstructor ~ popularInstructors:", popularInstructors);

  return (
    <div className='lg:my-24'>
      <h1 className='text-center md:my-8 text-[#000000] lg:text-5xl md:text-5xl font-bold text-2xl mb-7'>Learn from Creative Experts</h1>
      <p className='lg:mx-auto md:mx-auto text-center my-4 sm:text-2xl text-xl'>ShutterCraft classes are taught by industry leaders excited to share their tools, techniques, and professional journeys with you.</p>

      <div className='lg:flex lg:justify-start lg:flex-wrap  lg:my-8 lg:mx-4 lg:gap-2 md:flex md:flex-row md:flex-wrap md:justify-start md:gap-2 mt-4 mb-4'>
        {
          popularInstructors && popularInstructors?.length && Array?.isArray(popularInstructors) && popularInstructors?.map((instructor) => {
            {/* console.log("🚀 ~ popularInstructor&&popularInstructor.length&&Array.isArray ~ instructor:", instructor); */ }
            const { classes_names, instructor_image, instructor_id, instructor_name } = instructor;

            return (
              <div key={instructor_id} className="card relative lg:mb-0 md:mb-3 sm:mb-3 mb-3">
                <img loading="lazy" className='rounded lg:w-[380px] md:w-80' src={instructor_image} alt="instructor_image" />
                <div className='absolute bottom-0 left-4'>
                  <h2 className="text-white text-lg font-bold">
                    {instructor_name}
                  </h2>
                  <span>{classes_names?.map((classes_name, index) => {
                    return (
                      <h2 className='text-pretty text-base font-light capitalize' key={index}>{classes_name}</h2>
                    )
                  })}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default PopularInstructor;