import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar.jsx';

const RootLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayouts;