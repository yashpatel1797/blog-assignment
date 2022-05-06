import { useBlog } from 'context/blog-context';
import React from 'react'
import { useParams } from 'react-router-dom'

const SingleBlog = () => {
    const { blogId } = useParams();
    const { blog } = useBlog();
    const singleBlog = blog.find(({ _id }) => _id === blogId)

    return (
        <div className='container p-10 mx-auto px-10 mb-8'>
            <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
                <img className='object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg' src={singleBlog?.image} alt={singleBlog?.title} />
            </div>
            <h1 className=' text-center mb-8 cursor-pointer text-3xl font-semibold'>{singleBlog?.title}</h1>
            <p className='text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>{singleBlog?.content}</p>
        </div>

    )
}

export { SingleBlog }