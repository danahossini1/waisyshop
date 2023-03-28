import React from 'react'

export default function Grooping({ filter, filterProduct, flex }) {
    return (
        <div className={`${flex === 'col' ? 'flex-col' : ''} flex gap-7`}>
            <h3 onClick={() => filterProduct('all')} className={`cursor-pointer text-base ${filter === 'all' ? 'text-orange-600 font-bold ' : 'text-gray-500 '}`}>همه محصولات</h3>
            <h3 onClick={() => filterProduct('expensive')} className={`cursor-pointer text-base ${filter === 'expensive' ? 'text-orange-600 font-bold' : 'text-gray-500 '}`}>گران ترین</h3>
            <h3 onClick={() => filterProduct('inexpensive')} className={`cursor-pointer text-base ${filter === 'inexpensive' ? 'text-orange-600 font-bold' : 'text-gray-500 '}`}>ارزان ترین</h3>
            <h3 onClick={() => filterProduct('popular')} className={`cursor-pointer text-base ${filter === 'popular' ? 'text-orange-600 font-bold' : 'text-gray-500 '}`}>محبوب ترین</h3>
            <h3 onClick={() => filterProduct('visited')} className={`cursor-pointer text-base ${filter === 'visited' ? 'text-orange-600 font-bold' : 'text-gray-500 '}`}>پر بازدید ترین</h3>
        </div>
    )
}
