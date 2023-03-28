import React from 'react'
import { Link } from 'react-router-dom'

export default function MdHeader({searchValue,searchChange,children}) {
    return (
        <div className='bg-stone-50 col-span-12 hidden md:flex justify-between h-16 items-center px-4 py-2'>
            <div className='flex gap-6 font-semibold w-1/2 text-slate-800 items-center'>
                <Link to={'/'}><img src="./img/logo.png" className='rounded-2xl w-11 bg-purple-600' /></Link>
                <Link to={'/'} className='font-extrabold text-lg ml-8 cursor-pointer hover:bg-slate-200 p-2 px-4 rounded-xl duration-500'>خانه</Link>
                <Link to={'adminpanel'} className='ml-2 cursor-pointer hover:bg-slate-200 p-2 px-4 rounded-xl duration-500'> سبد خرید</Link>
                <Link to={'cardproduct'} className='ml-2 cursor-pointer hover:bg-slate-200 p-2 px-4 rounded-xl duration-500'>صفحه مدیر</Link>
            </div>
            <div className='w-1/2 flex  justify-end '>
                <div className='bg-stone-200 h-10 w-5/6 font-bold text-xs p-3 pr-12 rounded-lg relative'>

                    <svg className='absolute right-2' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='text-slate-800' d="M9.58317 17.4998C13.9554 17.4998 17.4998 13.9554 17.4998 9.58317C17.4998 5.21092 13.9554 1.6665 9.58317 1.6665C5.21092 1.6665 1.6665 5.21092 1.6665 9.58317C1.6665 13.9554 5.21092 17.4998 9.58317 17.4998Z" stroke="#222F5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.3332 18.3332L16.6665 16.6665" stroke="#222F5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <input type="text" placeholder='جستجوی نام محصول، نام برند ...'value={searchValue} onChange={(e) => searchChange(e)} className='bg-stone-200 w-full h-full focus:outline-none text-sm' />
                </div>
                {children}
            </div>
        </div>
    )
}
