import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar.jsx';

const RootLayouts = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayouts;