import React from 'react'

export default function SmHeader({searchShow}) {
    return (
        <div className='flex md:hidden justify-between items-center  pt-8'>
            <div className='w-8 rounded-xl overflow-hidden'><img src="./img/logo.png" /></div>
            <div className='font-extrabold text-xl text-slate-600 '>فروشگاه <span className='text-blue-500 text-2xl inline-block  '>ویسی</span></div>
            <div className='bg-white rounded-md p-1 cursor-pointer' onClick={searchShow} >
                <svg className='' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='text-slate-800' d="M9.58317 17.4998C13.9554 17.4998 17.4998 13.9554 17.4998 9.58317C17.4998 5.21092 13.9554 1.6665 9.58317 1.6665C5.21092 1.6665 1.6665 5.21092 1.6665 9.58317C1.6665 13.9554 5.21092 17.4998 9.58317 17.4998Z" stroke="#222F5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.3332 18.3332L16.6665 16.6665" stroke="#222F5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    )
}
