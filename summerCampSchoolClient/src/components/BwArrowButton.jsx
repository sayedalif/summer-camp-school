import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

// these button are for curriculum button and popular class button.
// black and white with arrow buttons
const BwArrowButton = ({ text, to }) => {
  return (
    // to={to}
    <Link>
      <button className="btn bg-[#000] hover:bg-[#000] text-[#FFFF] rounded-full capitalize">{text}
        <FontAwesomeIcon className='bg-[#fff] text-[#000] p-2 rounded-full' icon={faArrowRight} />
      </button>
    </Link>
  );
};

export default BwArrowButton;
