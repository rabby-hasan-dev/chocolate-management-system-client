import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EiditChocolate = () => {

    const handleEditChocolate = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const factory = form.factory.value;
        const category = form.category.value;
        const photo = form.photo.value;
        // console.log(name,factory,category, photo)
        const chocolate = { name, factory, category, photo }
        console.log(chocolate);
        fetch('http://localhost:5000/addChocolate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(chocolate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Successfully added chocolate')
                }
            })
    }

    return (
        <div className='m-[114px]'>

            <Link to='/'>
                <button className='btn btn-outline ' > <FaArrowLeft></FaArrowLeft>All categories </button>
            </Link>


            <div className='mt-8 bg-[#1414140D] p-28 rounded-lg'>
                <div className='text-center'>
                    <h3 className='text-2xl'>New Chocolates</h3>
                    <p>Use the below form to create a new product</p>
                </div>

                <form onSubmit={handleEditChocolate} >

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input type="text" name='name' placeholder="Hot Pink Chocolate" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Factory</span>

                        </label>
                        <input type="text" name='factory' placeholder="Enter Country Name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category</span>

                        </label>
                        <select name='category' className="select select-bordered w-full ">

                            <option >Premium</option>
                            <option>Discount</option>
                            <option>Reward</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Chocolate Picture</span>

                        </label>
                        <input type="text" name='photo' placeholder="Please Enter Photo Url" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mt-5">

                        <input type="submit" value="Save" className="input input-bordered text-white w-full bg-[#91572B] " />
                    </div>

                </form>
            </div>

        </div>
    );
};

export default EiditChocolate;