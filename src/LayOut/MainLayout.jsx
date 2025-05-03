import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Home/Shared/Navbar/NavBar';
import Footer from '../Pages/Home/Shared/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;