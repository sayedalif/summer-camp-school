import { Link } from 'react-router-dom';

const Logo = ({ color }) => {
  return (
    <button className={`btn btn-ghost hover:bg-transparent text-xl text-[${color}]`}>
      <Link to={`/`}>ShutterCraft</Link>
    </button>
  );
};

export default Logo;