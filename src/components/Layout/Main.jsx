import React from 'react';
import Home from '../page/Home/Home';
import Header from '../page/shared/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <div className='m-12'>
            <Header></Header>
            {/* <Home></Home> */}
            <Outlet></Outlet>
            </div>
        </>
    );
};

export default Main;