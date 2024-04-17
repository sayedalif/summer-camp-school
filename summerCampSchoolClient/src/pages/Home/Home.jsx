import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='min-h-[calc(100vh-276px)]'>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;