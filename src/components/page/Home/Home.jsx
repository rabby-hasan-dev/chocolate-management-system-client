import React from 'react';
import { Link } from 'react-router-dom';
import {  FaPlus } from 'react-icons/fa';
import ChocolateTable from './ChocolateTable';

const Home = () => {
    return (
        <div className='m-[114px]'>

            <Link to='/addChocolate'>
                <button className='btn btn-outline ' > <FaPlus className='mr-2'></FaPlus> New Chocolate</button>
            </Link>
            <div className='mt-8 bg-[#DC8D484D] p-5 rounded-lg'>
                <ul className='flex justify-between text-black text-bold mr-12'>
                    <li>Image</li>
                    <li>Name</li>
                    <li>Country</li>
                    <li>Category</li>
                    <li>Action</li>
                </ul>
            </div>
            <ChocolateTable></ChocolateTable>

        </div>
    );
};

export default Home;