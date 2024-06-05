import usePaymentClasses from '../../hooks/usePaymentClasses';
import { FaPlay } from "react-icons/fa";

const EnrolledClasses = () => {

  const { paymentClass, isLoading, error, refetch } = usePaymentClasses();
  console.log("🚀 ~ EnrolledClasses ~ paymentClass:", paymentClass);

  return (
    <div className='lg:flex lg:flex-row lg:flex-wrap lg:justify-center'>
      {

        paymentClass?.map(eachClass => {
          console.log("🚀 ~ EnrolledClasses ~ eachClass:", eachClass);
          const { available_seats, category, className, class_thumbnail, description, instructor_id, instructor_name, price, rating, status, students_enrolled, video_length, video_link, _id } = eachClass;
          return (
            <div key={_id} className="card lg:card-side bg-base-100 shadow-xl mb-3 w-96">
              <figure>
                <img className='h-48 w-full object-cover md:h-full md:w-48' src={class_thumbnail} alt="Album" />
              </figure>
              <div className="card-body">
                {/* <h2 className="card-title">{className}</h2>
                <p>{description}</p> */}
                <h2>{className}</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Play <FaPlay /></button>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default EnrolledClasses;