import { NavLink } from 'react-router-dom';

const ActiveLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending, isTransitioning }) =>
        [
          isPending ? "" : "",
          isActive ? "bg-gray-400 text-white rounded-md" : "",
          isTransitioning ? "" : "",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;