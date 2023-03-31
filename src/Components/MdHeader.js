import React from 'react'
import { Link } from 'react-router-dom'

export default function MdHeader({ searchValue, searchChange, children }) {
    return (
        <div className='bg-stone-50 shadow-lg col-span-12 hidden md:flex justify-between h-16 items-center px-4 py-2'>
            <div className='flex gap-4 font-semibold w-1/2 text-slate-800 items-center'>
                <Link to={'/'}><img src="./img/logo.png" className='rounded-2xl w-11 bg-purple-600' /></Link>

                <Link to={'/'} className='font-extrabold flex gap-2 text-lg ml-1 cursor-pointer hover:bg-slate-200 p-2 rounded-xl duration-500'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                    خانه</Link>
                <Link to={'/cardproduct'} className='ml-2 flex gap-2 cursor-pointer hover:bg-slate-200 p-2 rounded-xl duration-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    سبد خرید</Link>
            </div>
            <div className='w-1/2 flex  justify-end '>
                <div className='bg-stone-200 h-10 w-5/6 font-bold text-xs p-3 pr-12 rounded-lg relative'>

                    <svg className='absolute bottom-3 right-2' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='text-slate-800' d="M9.58317 17.4998C13.9554 17.4998 17.4998 13.9554 17.4998 9.58317C17.4998 5.21092 13.9554 1.6665 9.58317 1.6665C5.21092 1.6665 1.6665 5.21092 1.6665 9.58317C1.6665 13.9554 5.21092 17.4998 9.58317 17.4998Z" stroke="#222F5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.3332 18.3332L16.6665 16.6665" stroke="#222F5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <input type="text" placeholder='جستجوی نام محصول، نام برند ...' value={searchValue} onChange={(e) => searchChange(e)} className='bg-stone-200 w-full h-full focus:outline-none text-sm' />
                </div>
                {children}
            </div>
        </div>
    )
}
