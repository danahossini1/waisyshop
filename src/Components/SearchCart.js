import React from 'react'
import { Link } from 'react-router-dom'
import { convertDigitsEnToFa } from 'persian-utilities';
import { numericalSeparator } from 'persian-utilities';


export default function SearchCart({ name, price, groop, src1, color, url }) {
    return (
        <Link to={`category/${url}`}>
            <div className='flex w-full bg-white rounded-xl shadow-2xl mt-1'>
                <div className='flex-3 w-20 '> <img className='rounded-xl' src={src1} /></div>
                <div className='flex-1'>
                    <div className='flex items-center justify-between p-3'>
                        <h1 className='text-[10px] mi:text-sm w-2/3'>{name}</h1>
                        <h2 className='text-[10px] mi:text-xs  text-orange-700'>{convertDigitsEnToFa(numericalSeparator(price.toString(), 3, ','))} تومان</h2>
                    </div>
                    <div className='flex justify-between p-3'>
                        <p className='text-stone-500 text-[10px]'>{groop}</p>
                        <div className='flex relative'>
                            {color.sort(() => 0.5 - Math.random()).map((color, index) =>
                                <div className={`h-[14px] w-[14px] -mr-[5px] border rounded-full bg-${color}-600 `}></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    )
}
