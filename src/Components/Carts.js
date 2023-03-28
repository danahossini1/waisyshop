import React, { useEffect, useState, memo } from 'react'
import { Link } from 'react-router-dom'

const Carts = ({name, price, groop, src1, color,url }) => {

    const [colors, setColors] = useState([])

    useEffect(() => {
        setColors(color.sort(() => 0.5 - Math.random()))
    })

    return (
        <div className='bg-white w-fit mt-5 rounded-xl relative shadow-lg' >
            <div className='bg-slate-200 m-1 rounded-xl flex items-center justify-center '>
                <div className='rounded-full bg-gray-300 w-5 h-5 flex justify-center items-center absolute top-4 right-4'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.14091 4.48968C9.28571 3.41685 11.1417 3.41685 12.2865 4.48968C13.4314 5.56257 13.4314 7.30211 12.2865 8.375L8.11391 12.2853C7.99332 12.3983 7.79787 12.3983 7.67729 12.2853L3.50465 8.375C2.35978 7.30211 2.35978 5.56257 3.50465 4.48968C4.64945 3.41685 6.50548 3.41685 7.65028 4.48968L7.8956 4.71957L8.14091 4.48968Z" fill="#FF755C" />
                    </svg>
                </div>
                <img src={src1} className='rounded-xl ' />
            </div>
            <div className='px-2'>
                <div className='flex justify-between items-center mb-2 my-4'>
                    <p className='text-xs cursor-default text-gray-400 font-medium'>{groop}</p>
                    <div className='flex relative'>
                        {colors.map((color, index) =>
                            <div className={`h-[14px] w-[14px] -mr-[5px] border rounded-full bg-${color}-600 `}></div>
                        )}
                    </div>
                </div>
                <h2 className='text-sm my-4 h-10 cursor-default font-semibold'>{name}</h2>
                <p className='text-sm font-bold  cursor-default text-orange-700 text-end'>{price} تومان</p>
            </div>
            <div className='text-center'>
                <button className='text-sm font-bold text-orange-400 p-2 mt-3 border-t-2'><Link to={`category/${url}`}>مشاهده و سفارش</Link></button>
            </div>
        </div>
    )
}
export default memo (Carts)