import React, { useState } from 'react'
import { useBlog } from 'context/blog-context'
import { postBlog } from 'Services/https-helper';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const { dispatch } = useBlog();
    const navigate = useNavigate();
    const [formDetails, setFormDetails] = useState({
        image: "",
        title: "",
        content: "",
        category: "",
    })
    const inputHandler = (e, field) => {
        setFormDetails((pre) => ({
            ...pre, [field]: e.target.value
        }))
    }
    const formHandler = async (e) => {
        e.preventDefault();
        postBlog(formDetails, dispatch);
        navigate("/")
    }
    return (
        <div className='container p-10 mx-auto px-10 mb-8'>
            <p className='text-center mb-2 font-medium'>Create a new Post</p>
            <form onSubmit={formHandler}>
                <input
                    placeholder='Enter image'
                    name="image"
                    id="image"
                    className="border w-full mb-2 p-2 rounded focus:outline-none dark:bg-slate-600 border-slate-600"
                    value={formDetails.image}
                    onChange={(e) => inputHandler(e, "image")}
                    required />
                <input
                    placeholder='Enter title'
                    name="title"
                    id="title"
                    className="border w-full mb-2 p-2 rounded focus:outline-none dark:bg-slate-600 border-slate-600"
                    value={formDetails.title}
                    onChange={(e) => inputHandler(e, "title")}
                    required />
                <input
                    placeholder='Enter category'
                    name="category"
                    id="category"
                    className="border w-full mb-2 p-2 rounded focus:outline-none dark:bg-slate-600 border-slate-600"
                    value={formDetails.category}
                    onChange={(e) => inputHandler(e, "category")}
                    required />
                <textarea
                    placeholder='Enter content'
                    name="content"
                    id="content"
                    rows="15" cols="60"
                    className="border w-full mb-2 p-2 rounded focus:outline-none dark:bg-slate-600 border-slate-600"
                    value={formDetails.content}
                    onChange={(e) => inputHandler(e, "content")}
                    required></textarea>
                <button className='text-center rounded-full py-3 px-8 bg-indigo-600 text-white font-medium hover:bg-indigo-800'>Publish</button>
            </form>
        </div>
    )
}

export { Create }