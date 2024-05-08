import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';
import GoToTop from '../components/GoToTop';

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* this calculated based on the navbar height to ensure the footer is always at the bottom */}
      <div className='min-h-[calc(100vh-80px)]'>
        <Outlet></Outlet>
      </div>
      <GoToTop></GoToTop>
      <Footer></Footer>
    </>
  );
};

export default Main;