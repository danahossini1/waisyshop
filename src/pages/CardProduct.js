import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BottomBar from '../Components/BottomBar'
import { convertDigitsEnToFa } from 'persian-utilities';
import { numericalSeparator } from 'persian-utilities';
import Footer from '../Components/Footer';
import { ToastContainer, toast } from 'react-toastify';



export default function CardProduct() {

  const [cartProduct, setCartProdect] = useState([])

  const [priceCount, setPriceCount] = useState(null)
  const [freeCount, setFreeCount] = useState(null)

  const notify = () => toast.success("از خرید شما متشکریم  :)");
  const navigate = useNavigate()

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
    window.scrollTo(0, 0);
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

  const myGreeting = () => {
    const myTimeout = setTimeout(() => {

      localStorage.removeItem('cart')
      navigate('/')
    }
      , 2000);
  }



  // function myStopFunction() {
  //   clearTimeout(myTimeout);
  // }

  const payment = () => {
    notify()
    myGreeting()
    // myStopFunction()

  }


  return (
    <>
      <div className='bg-gray-100 mi:px-2 font-bold pb-6 '>
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
        <div className='bg-stone-50 shadow-lg col-span-12 hidden md:flex justify-between h-16 items-center px-4 py-2'>
          <div className='flex gap-4 font-semibold w-1/2 text-slate-800 items-center'>
            <Link to={'/'}><img src="/img/logo.png" className='rounded-2xl w-11 bg-purple-600' /></Link>

            <Link to={'/'} className='font-extrabold flex gap-2 text-lg ml-1 cursor-pointer hover:bg-slate-200 p-2 rounded-xl duration-500'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
              خانه</Link>
            <Link to={'/cardproduct'} className='ml-2 flex gap-2 cursor-pointer hover:bg-slate-200 p-2 rounded-xl duration-500'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              سبد خرید</Link>
          </div>
          <div className='w-1/2 flex  justify-end  ml-5'>
            {/* <h1></h1> */}
          </div>
        </div>
        {/* products */}
        <div className='px-3 mi:px-6 mt-12 md:flex gap-8 justify-between md:px-12 mb-8 '>
          {cartProduct ?
            <>
              <div className='md:w-1/2'>
                {
                  cartProduct.map(item =>
                    <div className='flex bg-white rounded-2xl  shadow-2xl  mt-3'>
                      <div className='w-2/6 mi:w-3/6 '><img src={item.product.src1} className='rounded-2xl shadow-lg w-full mi:h-full' /></div>
                      <div className='w-full p-3 flex flex-col justify-between'>
                        <div className='flex justify-between '>
                          <h1 className='w-full mi:w-5/6 text-xs mi:text-sm lg:text-lg'>{item.product.name}</h1>
                          <div onClick={() => deleteCart(item.product.id)}>
                            <svg width="15" height="15" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <line x1="22.5004" y1="2.12132" x2="2.12135" y2="22.5003" stroke="#FC5858" stroke-width="3" stroke-linecap="round" />
                              <line x1="1.5" y1="-1.5" x2="30.3203" y2="-1.5" transform="matrix(0.707107 0.707107 0.707107 -0.707107 2.49951 0)" stroke="#FC5858" stroke-width="3" stroke-linecap="round" />
                            </svg>
                          </div>
                        </div>
                        <div className='flex justify-between items-end'>
                          <div>
                            <h1 className='text-orange-500 text-xs mi:text-sm flex flex-col mi:block lg:text-base mt-2'><span className='text-[10px] lg:text-xs text-gray-500'>قیمت : </span>{convertDigitsEnToFa(numericalSeparator(item.product.price.toString(), 3, ','))} تومان</h1>
                            <h1 className='text-orange-500 text-xs mi:text-sm flex flex-col mi:block lg:text-base'><span className='text-[10px] lg:text-xs text-gray-500'>جمع کل : </span>{convertDigitsEnToFa(numericalSeparator((item.product.price * item.number).toString(), 3, ','))} تومان</h1>
                          </div>
                          <div className='flex flex-col items-center'>
                            <p className='text-sm ml-2'>تعداد :</p>
                            <div className='flex'>
                              <button onClick={() => { mathOpration(item.product.id, '+') }} className='px-1 mi:px-2 bg-orange-400 text-sm rounded-3xl shadow-lg'>+</button>
                              <span className='px-1 lg:text-lg'>{convertDigitsEnToFa(item.number.toString())}</span>
                              <button onClick={() => { mathOpration(item.product.id, '-') }} className='px-1 mi:px-2 bg-orange-400 text-base rounded-3xl  shadow-lg'>-</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>)

                }
              </div>
              <div className='mt-8 md:mt-0 p-2 md:w-1/2'>
                <div className='bg-white rounded-xl shadow-xl p-4 pl-12 mi:pl-4 md:pl-8'>

                  <div className='flex text-sm mi:text-base justify-between  text-start py-4'>
                    <p>جمع مبلغ : </p>
                    <p className='w-1/3  flex gap-2 justify-betwen'>
                      {priceCount && convertDigitsEnToFa(numericalSeparator(priceCount.toString(), 3, ','))}
                      <p className='md:ml-4 '> تومان</p>
                    </p>
                  </div>
                  <div className=' flex text-sm mi:text-base  justify-between  text-start py-4 border-b-2'>
                    <p>جمع تخفیف ها :</p>
                    <p className='w-1/3  flex gap-2 justify-betwee'>
                      {priceCount && convertDigitsEnToFa(numericalSeparator(freeCount.toString(), 3, ','))}
                      <p className='md:ml-4 '>  تومان</p>
                    </p>
                  </div>

                  <div className=' flex text-sm mi:text-base  justify-between  text-start py-4'>
                    <p>مبلغ قابل پرداخت :</p>
                    <p className='w-1/3  flex gap-2 justify-betwee'>
                      {priceCount && convertDigitsEnToFa(numericalSeparator((priceCount - freeCount).toString(), 3, ','))}
                      <p className='md:ml-4 '>
                        تومان
                      </p>
                    </p>
                  </div>
                  <div className='text-center mt-5'>
                    <button onClick={payment} className='px-8 py-2 bg-blue-600 text-white lg:text-lg lg:px-12'> ادامه پرداخت</button>
                  </div>
                </div>
              </div>
            </>

            :

            <div className='h-screen text-center w-full '>
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
      <Footer />
      <ToastContainer position="bottom-left" theme="dark" autoClose={2000} rtl={true} />

    </>
  )
}
