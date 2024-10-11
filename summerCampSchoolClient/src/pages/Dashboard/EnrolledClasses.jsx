import usePaymentClasses from '../../hooks/usePaymentClasses';
import useUserInfo from '../../hooks/useUserInfo';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const EnrolledClasses = () => {

  const { data: userInfoData, error: userInfoError, isLoading: userInfoLoading, refetch: userInfoRefetch } = useUserInfo();

  const { paymentClass, isLoading, error, refetch } = usePaymentClasses();
  console.log("🚀 ~ EnrolledClasses ~ paymentClass:", paymentClass);

  const bannedClasses = userInfoData?.banned_classes?.map(banned_class => banned_class);
  console.log("🚀 ~ EnrolledClasses ~ bannedClasses:", bannedClasses);

  return (
    <div className='lg:flex lg:flex-row lg:flex-wrap lg:justify-center'>
      {

        paymentClass?.length > 0 ? paymentClass?.map(eachClass => {
          console.log("🚀 ~ EnrolledClasses ~ eachClass:", eachClass);
          const { available_seats, category, className, class_thumbnail, description, instructor_id, instructor_name, price, rating, status, students_enrolled, video_length, video_link, _id } = eachClass;
          const bannedFromClass = bannedClasses?.includes(_id);
          {/* console.log("🚀 ~ EnrolledClasses ~ bannnedFromClass:", bannedFromClass); */ }
          return (
            <div key={_id} className={`card lg:card-side bg-base-100 shadow-xl mb-3 w-96`} >
              <figure>
                <img className='h-48 w-full object-cover md:h-full md:w-48' src={class_thumbnail} alt="Album" />
              </figure>
              <div className="card-body">
                {/* <h2 className="card-title">{className}</h2>
                <p>{description}</p> */}
                <h2>{className}</h2>
                <div className="card-actions justify-end">
                  {
                    bannedFromClass
                      ?
                      <button onClick={() => toast.error('you are banned form this class')} className='text-white btn btn-md btn-error'>Banned</button>
                      :
                      <button className='text-white btn btn-md btn-primary'>Play</button>
                  }
                </div>
              </div>
            </div>
          )
        })
          :
          <div className='flex justify-center items-center h-screen text-2xl'>
            <p className='mr-1'>No classes are found</p>
            <Link to={`/classes`}>
              <button className='btn btn-primary btn-sm'>  Join now</button>
            </Link>
          </div>
      }
    </div>
  );
};

export default EnrolledClasses;