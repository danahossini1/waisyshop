import React from 'react'

export default function Filter({ openFilter, filterShow, filterAction, filterMaxPrice, filterMinPrice, setFilterMaxPrice, setFilterMinPrice, filterMark, setFilterMark }) {
    return (
        <div className='text-xs mi:text-base'>
            <h1 className='text-orange-400 my-4'>فیلتر</h1>
            <label onClick={() => filterShow('brand')} className='flex pr-2 cursor-default  transition-all gap-1 items-center mb-2'>

                برند
                <svg width="13" height="13" className={`transition-all duration-500 ${openFilter === 'brand' ? 'rotate-180' : ''}`} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.20999 4.44154C2.31291 4.44154 2.41582 4.47946 2.49707 4.56071L6.02874 8.09238C6.28874 8.35238 6.71124 8.35238 6.97124 8.09238L10.5029 4.56071C10.66 4.40363 10.92 4.40363 11.0771 4.56071C11.2342 4.71779 11.2342 4.97779 11.0771 5.13488L7.54541 8.66654C6.97124 9.24071 6.03416 9.24071 5.45457 8.66654L1.92291 5.13488C1.76582 4.97779 1.76582 4.71779 1.92291 4.56071C2.00416 4.48488 2.10707 4.44154 2.20999 4.44154Z" fill="#222F5D" />
                </svg>
            </label>
            <div className={`lg:mr-4  ${openFilter === 'brand' ? 'block ' : 'hidden'} `}>
                <div className='flex items-center '><input type='checkbox' value={filterMark} onChange={e => setFilterMark(e.target.checked ? [...filterMark, 'gosonic'] : [...filterMark].filter(item => item !== 'gosonic'))} className='h-10 cursor-pointer mx-2 rounded-xl' /> <label>گوسونیک</label></div>
                <div className='flex items-center '><input type='checkbox' value={filterMark} onChange={e => setFilterMark(e.target.checked ? [...filterMark, 'foma'] : [...filterMark].filter(item => item !== 'foma'))} className='h-10 cursor-pointer mx-2 rounded-xl' /> <label>فوما</label></div>
                <div className='flex items-center '><input type='checkbox' value={filterMark} onChange={e => setFilterMark(e.target.checked ? [...filterMark, 'unic'] : [...filterMark].filter(item => item !== 'unic'))} className='h-10 cursor-pointer mx-2 rounded-xl' /> <label>یونیک</label></div>
                <div className='flex items-center '><input type='checkbox' value={filterMark} onChange={e => setFilterMark(e.target.checked ? [...filterMark, 'bosch'] : [...filterMark].filter(item => item !== 'bosch'))} className='h-10 cursor-pointer mx-2 rounded-xl' /> <label>بوش</label></div>
            </div>

            <label onClick={() => filterShow('price')} className='flex pr-2 cursor-pointer transition-all items-center gap-2 my-2'>

                محدوده قیمت
                <svg width="13" height="13" className={`transition-all duration-500 ${openFilter === 'price' ? 'rotate-180' : ''}`} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.20999 4.44154C2.31291 4.44154 2.41582 4.47946 2.49707 4.56071L6.02874 8.09238C6.28874 8.35238 6.71124 8.35238 6.97124 8.09238L10.5029 4.56071C10.66 4.40363 10.92 4.40363 11.0771 4.56071C11.2342 4.71779 11.2342 4.97779 11.0771 5.13488L7.54541 8.66654C6.97124 9.24071 6.03416 9.24071 5.45457 8.66654L1.92291 5.13488C1.76582 4.97779 1.76582 4.71779 1.92291 4.56071C2.00416 4.48488 2.10707 4.44154 2.20999 4.44154Z" fill="#222F5D" />
                </svg>
            </label>
            <div className={`${openFilter === 'price' ? 'block' : 'hidden'}`}>
                <input type="text" className=' bg-stone-200 p-2 w-full mt-2' value={filterMinPrice} onChange={e => { setFilterMinPrice(e.target.value) }} placeholder='از قیمت :' />
                <input type="text" className=' bg-stone-200 p-2 w-full mt-2' value={filterMaxPrice} onChange={e => { setFilterMaxPrice(e.target.value) }} placeholder='تا قیمت :' />
            </div>
            <div className=''>

                <button onClick={filterAction} className='bg-blue-700 mt-6 rounded-lg shadow-2xl text-xs mi:text-sm shadow-slate-800 px-4 text-white p-2'>اعمال فیلتر</button>
            </div>
        </div>
    )
}
