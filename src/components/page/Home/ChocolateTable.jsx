import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const ChocolateTable = ({ chocolate, setChocoletes, chocolates }) => {
    const { _id, name, photo, category, factory } = chocolate;

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addChocolate/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)

                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Chocolate has been deleted.',
                                'success')

                        }

                        const remaining = chocolates.filter(choco => choco._id !== id);
                        setChocoletes(remaining);
                    })


            }
        })


    }

    return (
        <>
            <div className='flex justify-between mx-5 items-center border-b-2 p-2'>
                <div>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} alt="picture" />
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="font-bold">{name}</div>
                </div>
                <div>
                    {factory}
                </div>
                <div>{category}</div>
                <div className='ml-4' >
                    <Link to={`/edit/${_id}`} > <button className="btn btn-ghost btn-xs"> <FaEdit></FaEdit></button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">X</button>

                </div>

            </div>

        </>
    );
};

export default ChocolateTable;