import { useBlog } from 'context/blog-context'
import React, { useState } from 'react'
import { EditBlog } from 'components'
import { deleteBlog } from 'Services/https-helper';

const Edit = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentId, setCurrentId] = useState();
    const { blog, dispatch } = useBlog();
    const deleteHandler = async (id) => {
        deleteBlog(id, dispatch)
    }
    const editHandler = (id) => {
        setShowModal(pre => !pre);
        setCurrentId(id)
    }
    return (
        <div className='container p-10 mx-auto px-10 mb-8'>
            {showModal &&
                <EditBlog id={currentId} setShowModal={setShowModal} />
            }
            <ul className='flex flex-wrap justify-evenly'>
                {blog.map(({ _id, title }) =>
                    <div className=' bg-indigo-50 m-2 p-2 rounded-lg'>
                        <li className='text-3xl font-semibold mb-2'>{title}</li>
                        <button className='m-2 text-center rounded-full py-2 px-5 bg-indigo-600 text-white font-small hover:bg-indigo-800' onClick={() => editHandler(_id)}>edit</button>
                        <button className='m-2 text-center rounded-full py-2 px-5 text-indigo-600 bg-white font-small hover:bg-indigo-600 hover:text-white' onClick={() => deleteHandler(_id)}>delete</button>
                    </div>)}
            </ul>

        </div>
    )
}

export { Edit }