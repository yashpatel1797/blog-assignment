import React from 'react'

const Footer = () => {
    return (
        <div className='container flex justify-evenly flex-wrap bg-slate-100 p-10 mx-auto px-10'>
            <ul>
                <li className='cursor-pointer'>Instagram</li>
                <li className='cursor-pointer'>Youtube</li>
                <li className='cursor-pointer'>Facebook</li>
                <li className='cursor-pointer'>Twitter</li>
                <li className='cursor-pointer'>LinkedIn</li>
            </ul>
            <ul>
                <li className='cursor-pointer'>Terms and Conditions</li>
                <li className='cursor-pointer'>Privacy Policy</li>
                <li className='cursor-pointer'>Cookie Policy</li>
                <li className='cursor-pointer'>FAQs</li>
            </ul>
            <ul>
                <li className='cursor-pointer'>About us</li>
                <li className='cursor-pointer'>Our work</li>
                <li className='cursor-pointer'>Pricing</li>
                <li className='cursor-pointer'>Help Center</li>
                <li className='cursor-pointer'>Career</li>
            </ul>
        </div>
    )
}

export { Footer }