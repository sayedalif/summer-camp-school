import { Link } from 'react-router-dom';

const Logo = ({ color }) => {
  return (
    <button className={`btn lg:btn-lg md:btn-md sm:btn-sm btn-xs btn-ghost hover:bg-transparent text-xl text-[${color}]`}>
      <Link to={`/`}>ShutterCraft</Link>
    </button>
  );
};

export default Logo;