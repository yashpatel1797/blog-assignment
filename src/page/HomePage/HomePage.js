import { useBlog } from 'context/blog-context'
import React from 'react'
import { BlogCard } from 'components';
const sortBlogsByDate = (blog) => {
    return [...blog].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
}
const HomePage = () => {
    const { blog } = useBlog();

    const sortedBlogs = sortBlogsByDate(blog)
    console.log(sortedBlogs);
    return (
        <div>
            <div className='container p-10 mx-auto px-10 mb-8'>
                <p className='text-center mb-2 font-medium'>Recent Post</p>
                {sortedBlogs.slice(0, 5).map(data => <BlogCard data={data} key={data._id} />)}
            </div>
        </div>
    )
}

export { HomePage }