import React from 'react'
import { useBlog } from 'context/blog-context';
import { BlogCard } from 'components';

const BlogPage = () => {
    const { blog } = useBlog();
    return (
        <div className='container p-10 mx-auto px-10 mb-8'>
            {blog.map(data => <BlogCard data={data} key={data._id} />)}
        </div>

    )
}

export { BlogPage }