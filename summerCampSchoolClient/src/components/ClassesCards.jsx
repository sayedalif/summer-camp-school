import { generateRandomColorString } from "../hooks/utils/utils";
import { faArrowRight, faIdBadge, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserInfo from "../hooks/useUserInfo";
import { BiSolidEdit } from "react-icons/bi";
import axios from "axios";
import toast from "react-hot-toast";
import useCart from "../hooks/useCart";
import usePaymentClasses from "../hooks/usePaymentClasses";
import useAxiosPublic from "../hooks/useAxiosPublic";


const ClassesCards = ({ key, eachClass, status, feedback }) => {
  // these are for dropping of the user in same page after login
  const location = useLocation();
  // console.log("🚀 ~ ClassesCards ~ location:", location);
  const navigate = useNavigate();

  // user authentication data
  const { user } = useAuth();

  const [axiosPublic] = useAxiosPublic();

  // userinfo data
  const { data: userInfo, error, isLoading, refetch } = useUserInfo();

  // this generates random badge color for the cards
  const randomBadgeColors = generateRandomColorString();

  // carts data
  const { carts, error: cartsError, isLoading: cartsIsLoading, refetch: cartsRefetch, totalPrice } = useCart();

  // payment info data
  const { paymentClass, isLoading: paymentIsLoading, error: paymentError, refetch: paymentRefetch } = usePaymentClasses();
  // console.log("🚀 ~ ClassesCards ~ paymentClass:", paymentClass);

  const joinedClassIds = carts.map(cart => cart.class_id);
  // console.log("🚀 ~ ClassesCards ~ joinedClassIds:", joinedClassIds);
  const paidClassIds = paymentClass.map(classes => classes?._id);
  // console.log("🚀 ~ ClassesCards ~ paidClassIds:", paidClassIds);


  // this function add class to cart and redirects to enrolled class
  const handleAddToCart = async (eachClass) => {
    // // console.log("🚀 ~ handleAddToCart ~ eachClass:", eachClass);
    // className
    // class_thumbnail
    // instructor_id
    // _id
    // price
    // available_seats / students_enrolled
    if (!user) {
      toast('Please login first');
      return navigate("/login", { state: { from: location } });
    }

    axiosPublic.patch(`/classes/${eachClass?._id}`, { students_enrolled: eachClass?.students_enrolled + 1 }).then(response => {
      // console.log("🚀 ~ axiosPublic.patch ~ response:", response);
    }).catch(err => {
      console.log(err);
    })

    const addedToCart = {
      email: user?.email,
      className: eachClass?.className,
      class_thumbnail: eachClass?.class_thumbnail,
      instructor_id: eachClass?.instructor_id,
      class_id: eachClass?._id,
      price: eachClass?.price,
      available_seats: eachClass?.available_seats,
      students_enrolled: eachClass?.students_enrolled,
    };
    // console.log("🚀 ~ handleAddToCart ~ addedToCart:", addedToCart);

    try {
      const response = await axios.post(`http://localhost:5000/carts?email=${user?.email}`, addedToCart);
      // console.log("🚀 ~ response:", response.data);
      if (response?.data?.acknowledged === true && response?.data?.insertedId) {
        toast.success('Joined class successfully');
        return navigate("/dashboard/selectedclasses");
      }
    } catch (error) {
      // console.log("🚀 ~ handleAddToCart ~ error:", error);
    }
  }

  return (
    <div key={key} className='group cursor-pointer'>

      {
        location?.pathname === '/dashboard/myclass' && userInfo?.role === 'instructor' && <div className="flex justify-between px-4 py-3">
          {
            eachClass?.status === 'denied' && <button className="btn btn-sm">Feedback</button>
          }
          <button className="btn btn-sm">edit<BiSolidEdit /></button>
        </div>
      }
      <div className={`card-container lg:w-[22rem] md:w-[20rem] sm:w-[20rem] w-[18rem] lg:h-[28rem] ${parseInt(eachClass?.available_seats) === parseInt(eachClass?.students_enrolled) ? 'bg-red-500' : 'bg-base-100'} shadow-xl group-hover:bg-[#C3FFD2] hover:scale-[1.03] transition duration-300 delay-150 hover:delay-300 mb-4 rounded-xl backface-hidden`}>


        <div className='flex flex-col justify-between h-full'>
          <div className='flex justify-between items-start px-4 py-4'>
            <figure>
              <img loading="lazy" className='md:w-[200px] w-48 md:rounded-md sm:rounded-sm rounded' src={eachClass?.class_thumbnail} alt='instructor image' />
            </figure>
            <div className='text-right'>

              <span style={{ backgroundColor: randomBadgeColors }} className={`badge text-end outline-none border-0`}>
                {eachClass?.category}
              </span>

              <span className="card-title text-base">{eachClass?.className}</span>
            </div>
          </div>
          <div className="card-body px-4 py-4">
            <p className='font-medium text-base'>{eachClass?.description}</p>
            <p>available seats: {eachClass?.available_seats} /  {eachClass?.students_enrolled}</p>

            {
              location?.pathname === '/dashboard/myclass' && userInfo?.role === 'instructor' && eachClass?.status && <p>Status: <span className={`${eachClass?.status === 'denied' ? 'text-red-500' : eachClass?.status === 'approved' ? 'text-green-500' : 'text-yellow-500'} capitalize font-bold`}>{eachClass?.status}</span></p>
            }
            {
              location?.pathname === '/dashboard/manageclasses' && userInfo?.role === 'admin' && eachClass?.status && <p>Status: <button className={`${eachClass?.status === 'denied' ? 'text-red-500' : eachClass?.status === 'approved' ? 'text-green-500' : 'text-yellow-500'} capitalize font-bold btn btn-xs`} disabled={eachClass?.status !== 'approved'}>{eachClass?.status}</button></p>
            }
            <div className='flex justify-between items-center'>
              <span className='badge bg-[#E2F6FF] my-[16px]'>
                <FontAwesomeIcon className='text-[#6FD1FF] pr-1' icon={faIdBadge} />
                {eachClass?.instructor_name}</span>
              <span className='badge bg-[#FDF7EF]'>
                <FontAwesomeIcon className='text-[#FED477]' icon={faStar} />
                {eachClass?.rating}</span>
            </div>
            <div className="card-actions flex justify-between items-center">
              <span className='md:text-3xl text-2xl font-bold'>${eachClass?.price}</span>
              <button onClick={() => handleAddToCart(eachClass)} disabled={joinedClassIds.includes(eachClass?._id) || paidClassIds?.includes(eachClass?._id)} className={`btn bg-[#FFFFFF] text-[#101218] rounded-full px-2 lg:px-4 ${eachClass?.available_seats === eachClass?.student_enrolled || (userInfo?.role === 'instructor' || userInfo?.role === 'admin') ? 'btn-disabled' : 'hover:bg-[#A3A3F5] group-hover:bg-[#A3A3F5]'}`}>
                {
                  joinedClassIds.includes(eachClass?._id) || paidClassIds?.includes(eachClass?._id) ? 'Joined' : <>
                    Join Now <FontAwesomeIcon icon={faArrowRight} />
                  </>
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCards;