import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChocolateTable = () => {
    return (
        <>
            <div className='flex justify-between mx-5 items-center border-b-2 p-2'>
                <div>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo23tYn4lKpHQfnMMHNWcf3pSMyg3wNQrJT2yFJSHA&s" alt="picture" />
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="font-bold">Hart Hagerty</div>
                </div>
                <div>
                    Zemlak, Daniel and Leannon
                </div>
                <div>Purple</div>
                <div className='ml-4' >
                    <Link to='/edit' > <button className="btn btn-ghost btn-xs"> <FaEdit></FaEdit></button></Link>
                    <button className="btn btn-ghost btn-xs">X</button>

                </div>

            </div>

        </>
    );
};

export default ChocolateTable;