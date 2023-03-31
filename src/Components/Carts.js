import React, { useEffect, useState, memo } from 'react'
import { Link } from 'react-router-dom'
import { convertDigitsEnToFa } from 'persian-utilities';
import { numericalSeparator } from 'persian-utilities';

const Carts = ({ name, price, groop, src1, color, url, free,loadimg }) => {

    const [colors, setColors] = useState([])
    const [frees, setFrees] = useState(price * free / 100)

    useEffect(() => {
        setColors(color.sort(() => 0.5 - Math.random()))
    })

    return (
        <div className='bg-white w-fit mt-5 rounded-xl relative shadow-lg' >
            {free !== 0 && <div className='absolute -left-1 top-2 bg-red-600 rounded-xl p-1 px-2 text-[8px] mi:text-[11px] text-zinc-100 -rotate-[35deg]'>%free {free}</div>}
            <Link to={`category/${url}`}>
                <div className='bg-slate-200 m-1 rounded-xl flex items-center justify-center'>
                    <div className='rounded-full bg-gray-300 w-5 h-5 flex justify-center items-center absolute top-4 right-4'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.14091 4.48968C9.28571 3.41685 11.1417 3.41685 12.2865 4.48968C13.4314 5.56257 13.4314 7.30211 12.2865 8.375L8.11391 12.2853C7.99332 12.3983 7.79787 12.3983 7.67729 12.2853L3.50465 8.375C2.35978 7.30211 2.35978 5.56257 3.50465 4.48968C4.64945 3.41685 6.50548 3.41685 7.65028 4.48968L7.8956 4.71957L8.14091 4.48968Z" fill="#FF755C" />
                        </svg>
                    </div>
                    <img src={src1} onLoad={loadimg} className='rounded-xl h-full w-full' />
                </div>
            </Link>
            <div className='px-2'>
                <div className='flex justify-between items-center mb-2 my-4'>
                    <p className='text-[10px] mi:text-xs cursor-default text-gray-400 font-medium'>{groop}</p>
                    <div className='flex relative'>
                        {colors.map((color, index) =>
                            <div key={index} className={`h-[14px] w-[14px] -mr-[5px] border rounded-full bg-${color}-600 `}></div>
                        )}
                    </div>
                </div>
                <Link to={`category/${url}`}>
                    <h2 className='text-xs mi:text-sm my-4 h-12 font-semibold'>{name}</h2>
                </Link>
                <div className='h-8 flex flex-col justify-end'>
                    {free !== 0 && <p className='text-[10px] lg:text-xs line-through font-bold  cursor-default text-stone-500 text-end'>{convertDigitsEnToFa(numericalSeparator(price.toString(), 3, ','))} تومان</p>}
                    <p className='text-xs lg:text-sm font-bold mb-1  cursor-default text-orange-700 text-end'>{convertDigitsEnToFa(numericalSeparator((price - frees).toString(), 3, ','))} تومان</p>
                </div>
            </div>
            <Link to={`category/${url}`}>
                <div className='text-center'>
                    <button className='text-xs font-bold text-orange-400 p-2 border-t-2'>مشاهده و سفارش</button>
                </div>
            </Link>
        </div>
    )
}
export default memo(Carts)