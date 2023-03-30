import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminPanel() {
  return (
    <div>
      <div className='bg-stone-50 col-span-12 hidden md:flex justify-between h-16 items-center px-4 py-2'>
        <div className='flex gap-6 font-semibold w-1/2 text-slate-800 items-center'>
          <Link to={'/'}><img src="/img/logo.png" className='rounded-2xl w-11 bg-purple-600' /></Link>
          <Link to={'/'} className='font-extrabold text-lg ml-8 cursor-pointer hover:bg-slate-200 p-2 px-4 rounded-xl duration-500'>خانه</Link>
          <Link to={'/cardproduct'} className='ml-2 cursor-pointer hover:bg-slate-200 p-2 px-4 rounded-xl duration-500'> سبد خرید</Link>
          <Link to={'/adminpanel'} className='ml-2 cursor-pointer hover:bg-slate-200 p-2 px-4 rounded-xl duration-500'>صفحه مدیر</Link>
        </div>


      </div>
    </div>
  )
}
