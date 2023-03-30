import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BottomBar from '../Components/BottomBar'

export default function CardProduct() {

  const [cartProduct, setCartProdect] = useState([])

  const [priceCount, setPriceCount] = useState(null)
  const [freeCount, setFreeCount] = useState(null)



  const getLocal = () => {
    let local = JSON.parse(localStorage.getItem('cart'))
    setCartProdect(local)
    let price = 0
    let free = 0
    local && local.map(item => {
      let mines = (item.product.price * item.product.free) / 100
      price += (item.product.price * item.number)
      free += (mines * item.number)
    })
    setPriceCount(price)
    setFreeCount(free)
  }

  useEffect(() => {
    setCartProdect(JSON.parse(localStorage.getItem('cart')))
    getLocal()
  }, [])


  const deleteCart = Id => {

    let delet = cartProduct.filter(item => item.product.id !== Id)
    if (delet.length) {
      localStorage.setItem('cart', JSON.stringify(delet))
      getLocal()
    } else {
      localStorage.removeItem('cart')
      getLocal()
    }
  }

  const mathOpration = (Id, oprate) => {
    let prod = cartProduct.map(item => {
      item.product.id === Id && (oprate === '+' ? item.number++ : item.number !== 1 && item.number--)
      return item
    })
    localStorage.setItem('cart', JSON.stringify(prod))
    getLocal()
  }

  return (
    <div className='bg-gray-100 px-2 font-bold'>
      {/* sm : header */}
      <div className='flex md:hidden justify-between items-center  px-4 pt-8'>
        <Link to='/'><div className='bg-white rounded-xl p-2 cursor-pointer' >
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.80836 2.89017C5.80836 3.02475 5.85794 3.15934 5.96419 3.26559L10.5825 7.88392C10.9225 8.22392 10.9225 8.77642 10.5825 9.11642L5.96419 13.7348C5.75878 13.9402 5.75878 14.2802 5.96419 14.4856C6.16961 14.691 6.50961 14.691 6.71502 14.4856L11.3334 9.86725C12.0842 9.11642 12.0842 7.891 11.3334 7.13308L6.71502 2.51475C6.50961 2.30933 6.16961 2.30933 5.96419 2.51475C5.86503 2.621 5.80836 2.75559 5.80836 2.89017Z" fill="#222F5D" />
          </svg>
        </div></Link>
        <div className='font-extrabold text-base text-slate-600 '>سبد خرید</div>
        <div className='w-9 rounded-xl overflow-hidden'><img src="/img/logo.png" /></div>
      </div>
      {/* md : header */}
      <div className='bg-stone-50 col-span-12 hidden md:flex justify-between h-16 items-center px-4 py-2'>
        <div className='flex gap-6 font-semibold w-1/2 text-slate-800 items-center'>
          <Link to={'/'}><img src="/img/logo.png" className='rounded-2xl w-11 bg-purple-600' /></Link>
          <Link to={'/'} className='font-extrabold text-lg ml-8 cursor-pointer hover:bg-slate-200 p-2 px-4 rounded-xl duration-500'>خانه</Link>
          <Link to={'/cardproduct'} className='ml-2 cursor-pointer hover:bg-slate-200 p-2 px-4 rounded-xl duration-500'> سبد خرید</Link>
          <Link to={'/adminpanel'} className='ml-2 cursor-pointer hover:bg-slate-200 p-2 px-4 rounded-xl duration-500'>صفحه مدیر</Link>
        </div>
        <div className='w-1/2 flex  justify-end  ml-5'>
          {/* <h1></h1> */}
        </div>
      </div>
      {/* products */}
      <div className='px-6 mt-12 md:flex justify-between md:px-16 mb-16'>
        {cartProduct ?
          <>
            <div className='md:w-1/2'>
              {
                cartProduct.map(item =>
                  <div className='flex bg-white rounded-2xl md:h-32 shadow-2xl h-24 mt-3'>
                    <div className='w-2/6 shadow-lg rounded-2xl'><img src={item.product.src1} className='rounded-2xl w-full h-full' /></div>
                    <div className='w-full p-3 flex flex-col justify-between'>
                      <div className='flex justify-between '>
                        <h1 className='w-2/3 text-sm'>{item.product.name}</h1>
                        <div onClick={() => deleteCart(item.product.id)}>
                          <svg width="15" height="15" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="22.5004" y1="2.12132" x2="2.12135" y2="22.5003" stroke="#FC5858" stroke-width="3" stroke-linecap="round" />
                            <line x1="1.5" y1="-1.5" x2="30.3203" y2="-1.5" transform="matrix(0.707107 0.707107 0.707107 -0.707107 2.49951 0)" stroke="#FC5858" stroke-width="3" stroke-linecap="round" />
                          </svg>
                        </div>
                      </div>
                      <div className='flex justify-between items-end'>
                        <div>
                          <h1 className='text-orange-500 text-xs'><span className='text-[11px] text-gray-500'>قیمت : </span>{item.product.price} تومان</h1>
                          <h1 className='text-orange-500 text-sm'><span className='text-[11px] text-gray-500'>جمع کل : </span>{item.product.price * item.number} تومان</h1>
                        </div>
                        <div className='flex'>
                          <p className='text-sm ml-2'>تعداد :  </p>
                          <div className=''>
                            <button onClick={() => { mathOpration(item.product.id, '+') }} className='px-2 bg-gray-300 rounded-full shadow-lg'>+</button>
                            <span className='px-1'>{item.number}</span>
                            <button onClick={() => { mathOpration(item.product.id, '-') }} className='px-2  bg-red-300 rounded-full shadow-lg'>--</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>)

              }
            </div>
            <div className='mt-8 p-2 md:w-1/2'>
              <div className='bg-white rounded-xl shadow-xl p-4 md:mx-12'>

                <div className='flex justify-between px-4 py-4 w-full'>
                  <p>جمع مبلغ : </p>
                  <p className='w-1/3  flex gap-2 justify-between'>
                    {priceCount}
                    <p className='md:ml-4 '>           تومان</p>
                  </p>
                </div>
                <div className=' flex  justify-between px-4 py-4 w-full border-b-2'>
                  <p>جمع تخفیف ها :</p>
                  <p className='w-1/3  flex gap-2 justify-between'>
                    {freeCount}
                    <p className='md:ml-4 '>           تومان</p>
                  </p>
                </div>

                <div className=' flex  justify-between px-4 py-4 w-full'>
                  <p>مبلغ قابل پرداخت :</p>
                  <p className='w-1/3  flex gap-2 justify-between'>
                    {priceCount - freeCount}
                    <p className='md:ml-4 '>
                      تومان
                    </p>
                  </p>
                </div>
                <div className='text-center mt-5'>
                  <button className='px-8 py-2 bg-blue-600 text-white'> ادامه پرداخت</button>
                </div>
              </div>
            </div>
          </>

          :

          <div className='h-screen text-center w-full'>
            <div className=' mt-20 flex bg-red-300 items-center p-4 rounded-xl shadow-lg justify-between'>

              <div></div>
              <h1 className='  '>سبد خرید شما خالی است</h1>
              <div className=''>
                <Link to='/'>
                  <button>بازگشت</button>
                </Link>
              </div>
            </div>
          </div>

        }
      </div>



      {/* bottom bar */}
      <div className='md:hidden'>
        <BottomBar page='cart' />
      </div>
    </div>
  )
}
