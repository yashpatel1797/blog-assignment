import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = ({ data }) => {
    return (
        <div className='bg-indigo-50 p-0 lg:p-8 pb-12 mb-8'>
            <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
                <img className='object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg' src={data.image} alt={data.title} />
            </div>
            <h1 className=' text-center mb-8 cursor-pointer text-3xl font-semibold hover:text-sky-400'>{data.title}</h1>
            <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
                <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center text-gray-700 font-medium text-lg'>{data.category}</div>
                <div className='font-medium text-gray-700'>Date:{data.date}</div>
            </div>
            <p className='truncate text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>{data.content}</p>
            <div className='text-center'>
                <Link to={`/blog/${data._id}`}>
                    <button className='text-center rounded-full py-3 px-8 bg-indigo-600 text-white font-medium hover:bg-indigo-800'>Continue Reading</button>
                </Link>
            </div>
        </div>
    )
}

export { BlogCard }
