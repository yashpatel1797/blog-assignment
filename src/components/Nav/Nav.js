import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='container flex p-10 bg-slate-100 mx-auto px-10 mb-8'>
            <Link className='mr-auto' to="/">
                <div className='cursor-pointer text-sky-400'>Blogger</div>
            </Link>
            <div>
                <ul className='flex'>
                    <Link to="create">
                        <li className='cursor-pointer font-semibold mr-3 hover:text-sky-400'>Create</li>
                    </Link>
                    <Link to="edit">
                        <li className='cursor-pointer font-semibold mr-3 hover:text-sky-400'>Edit</li>
                    </Link>
                    <Link to="blog">
                        <li className='cursor-pointer font-semibold mr-3 hover:text-sky-400'>All Blog</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export { Nav }