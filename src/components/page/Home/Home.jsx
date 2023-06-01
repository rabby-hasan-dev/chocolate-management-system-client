import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import ChocolateTable from './ChocolateTable';

const Home = () => {
    const chocolatesLoader = useLoaderData();
    const [chocolates, setChocoletes] = useState(chocolatesLoader)
    return (
        <div className='m-[114px]'>

            <Link to='/addChocolate'>
                <button className='btn btn-outline ' > <FaPlus className='mr-2'></FaPlus> New Chocolate</button>
            </Link>
            <div className='mt-8 bg-[#DC8D484D] p-5 rounded-lg'>
                <ul className='flex justify-between text-black text-bold mr-12'>
                    <li>Image</li>
                    <li>Name</li>
                    <li>Factory</li>
                    <li>Category</li>
                    <li>Action</li>
                </ul>
            </div>
            {
                chocolates.map(chocolate => <ChocolateTable
                    key={chocolate._id}
                    chocolate={chocolate}
                    setChocoletes={setChocoletes}
                    chocolates={chocolates}
                ></ChocolateTable>)
            }



        </div>
    );
};

export default Home;