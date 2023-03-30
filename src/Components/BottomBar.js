import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function BottomBar({ page }) {


    return (
        <div className='md:hidden bg-stone-50 fixed rounded-t-2xl bottom-0 right-0 left-0 shadow-2xl shadow-black h-16 flex justify-around items-center'>
            <Link to='/'>
                <svg className={` rounded-2xl p-2 ${page === 'home' ? 'bg-purple-300' : ''}`} width="50" height="50" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.72 9.09358L19.04 3.72024C16.9467 2.25358 13.7333 2.33358 11.72 3.89358L5.03999 9.10691C3.70665 10.1469 2.65332 12.2802 2.65332 13.9602V23.1602C2.65332 26.5602 5.41332 29.3336 8.81332 29.3336H23.1867C26.5867 29.3336 29.3467 26.5736 29.3467 23.1736V14.1336C29.3467 12.3336 28.1867 10.1202 26.72 9.09358ZM17 24.0002C17 24.5469 16.5467 25.0002 16 25.0002C15.4533 25.0002 15 24.5469 15 24.0002V20.0002C15 19.4536 15.4533 19.0002 16 19.0002C16.5467 19.0002 17 19.4536 17 20.0002V24.0002Z" fill="#222F5D" fillOpacity={`${page !== 'home' && '0.4'}`} />
                </svg>
            </Link>
            <Link to='/cardproduct'>
                <svg className={` rounded-2xl p-2 ${page === 'cart' ? 'bg-purple-300' : ''}`} width="50" height="50" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.2766 12.6934C27.3275 11.6451 25.8966 11.0359 23.9133 10.8234V9.74673C23.9133 7.8059 23.0916 5.9359 21.6466 4.63256C20.1875 3.3009 18.2891 2.67756 16.32 2.86173C12.9341 3.18756 10.0866 6.46006 10.0866 10.0017V10.8234C8.1033 11.0359 6.67247 11.6451 5.7233 12.6934C4.34913 14.2234 4.39163 16.2634 4.54747 17.6801L5.53913 25.5709C5.83663 28.3334 6.9558 31.1667 13.0475 31.1667H20.9525C27.0441 31.1667 28.1633 28.3334 28.4608 25.5851L29.4525 17.6659C29.6083 16.2634 29.6366 14.2234 28.2766 12.6934ZM16.5183 4.8309C17.935 4.7034 19.2808 5.14256 20.3291 6.09173C21.3633 7.02673 21.9441 8.3584 21.9441 9.74673V10.7384H12.0558V10.0017C12.0558 7.48006 14.1383 5.05756 16.5183 4.8309ZM11.9283 18.6292H11.9141C11.135 18.6292 10.4975 17.9917 10.4975 17.2126C10.4975 16.4334 11.135 15.7959 11.9141 15.7959C12.7075 15.7959 13.345 16.4334 13.345 17.2126C13.345 17.9917 12.7075 18.6292 11.9283 18.6292ZM21.845 18.6292H21.8308C21.0516 18.6292 20.4141 17.9917 20.4141 17.2126C20.4141 16.4334 21.0516 15.7959 21.8308 15.7959C22.6241 15.7959 23.2616 16.4334 23.2616 17.2126C23.2616 17.9917 22.6241 18.6292 21.845 18.6292Z" fill="#222F5D" fillOpacity={`${page !== 'cart' && '0.4'}`} />
                </svg>
            </Link>
        </div>
    )
}
