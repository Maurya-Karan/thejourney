import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <div className='z-50'>
        <Navbar />
      </div>
     
      <Outlet />  
    </>
  );
};

export default Layout;
