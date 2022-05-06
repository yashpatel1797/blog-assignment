import { useBlog } from 'context/blog-context'
import React, { useState } from 'react'
import { editBlog } from 'Services/https-helper';

const EditBlog = ({ id, setShowModal }) => {
    const { blog, dispatch } = useBlog();
    const details = blog.find(({ _id }) => id === _id)
    const [formDetails, setFormDetails] = useState(
        details ?? {
            image: "",
            title: "",
            content: "",
            category: "",
        })
    console.log(details);
    const inputHandler = (e, field) => {
        setFormDetails((pre) => ({
            ...pre, [field]: e.target.value
        }))
    }
    const formHandler = async (e) => {
        e.preventDefault();
        editBlog(id, formDetails, dispatch)
        setShowModal(pre => !pre)
    }
    return (
        <div>
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
                <button className='text-center rounded-full py-3 px-8 bg-indigo-600 text-white font-medium hover:bg-indigo-800'>Save</button>
            </form>
        </div>
    )
}

export { EditBlog }