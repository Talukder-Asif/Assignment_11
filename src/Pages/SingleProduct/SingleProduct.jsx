import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import HeaderTytle from "/src/Components/HeaderTytle";

const SingleProduct = () => {
    const foodData = useLoaderData()
    const {name, _id, image, category, price,origine, quantity, shelfName,shortDescription, details  } = foodData;
    return (
        <div>
        <HeaderTytle title={name}></HeaderTytle>
            <div style={{backgroundImage: "url(https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/breadcumb_bg_2-1.jpg)"}} className=" bg-no-repeat bg-cover bg-center">
            <div className="max-w-7xl m-auto md:py-20 p-5 md:pl-36 lg:py-24 ">
            <div className="space-y-2 md:space-y-5">
            <h3 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold">{name}</h3>
            <p className="italic text-xl font-semibold text-white">Home &gt; Food Items &gt; {category} &gt; {name}</p>
            </div>
            </div>
            </div>

            <div className='md:grid grid-cols-2 p-4 gap-10 max-w-6xl m-auto py-10 border-b-2 border-[#eb0029]'>
                <div>
                    <img className=' mb-5' src={image} alt="" />
                </div>
                <div className='space-y-3'>
                <h3 className="text-3xl md:text-4xl text-gray-900 lg:text-5xl font-bold">{name}</h3>
                <p className="text-2xl md:text-3xl text-gray-900 lg:text-4xl font-bold">Price : <span className='text-[#eb0029]'>${price}</span></p>
                <p className='text-gray-900 text-xl font-semibold'>Category : {category}</p>
                <p className='text-gray-900 text-xl font-semibold'>Made By : {shelfName}</p>
                <p className='text-gray-900 text-xl font-semibold'>Food Origin : {origine}</p>
                <Link to={`/foods/order/${_id}`} ><button className="mt-5 border-2 border-[#eb0029] text-white bg-[#eb0029] hover:bg-white hover:text-[#eb0029] font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Order Now</button></Link>
                <br />
                <p className='text-gray-900 text-xl font-semibold'><span className='border-b-2 border-[#eb0029]'>Short Description</span> : {shortDescription}</p>

                </div>
            </div>
            <p className='max-w-6xl p-4 m-auto'><b>Details</b> : {details}</p>
        </div>
    );
};

export default SingleProduct;