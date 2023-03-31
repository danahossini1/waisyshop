import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BottomBar from '../Components/BottomBar'
import products from '../data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { convertDigitsEnToFa } from 'persian-utilities';
import { numericalSeparator } from 'persian-utilities';
import Footer from '../Components/Footer';




export default function Category() {

    let param = useParams()
    const [product, setProduct] = useState(...[...products.juc, ...products.oto, ...products.tee].filter(item => item.url === param.Cname))
    const [percent, setPercent] = useState((product.price * product.free) / 100)

    const notify = () => toast.success("محصول با موفقیت اضافه شد");


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const addToCart = () => {
        const localData = JSON.parse(localStorage.getItem('cart'))

        if (localData) {

            let local = [...localData]
            localData.map(item => {
                if (item.product.id === product.id) {
                    item.number++
                    localStorage.setItem('cart', JSON.stringify(local))
                    console.log('yes');
                } else {
                    localStorage.setItem('cart', JSON.stringify([...localData, { product: product, number: 1 }]))
                    console.log('no');
                }
            })


        } else {
            localStorage.setItem('cart', JSON.stringify([{ product: product, number: 1 }]))
            console.log('nooo');
        }
        notify()
    }


    return (
        <>
            <div className='bg-gray-100 px-2 font-bold pb-6'>
                {/* sm : header */}
                <div className='flex md:hidden justify-between items-center  px-4 pt-8'>
                    <Link to='/'><div className='bg-white rounded-xl p-2 cursor-pointer' >
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.80836 2.89017C5.80836 3.02475 5.85794 3.15934 5.96419 3.26559L10.5825 7.88392C10.9225 8.22392 10.9225 8.77642 10.5825 9.11642L5.96419 13.7348C5.75878 13.9402 5.75878 14.2802 5.96419 14.4856C6.16961 14.691 6.50961 14.691 6.71502 14.4856L11.3334 9.86725C12.0842 9.11642 12.0842 7.891 11.3334 7.13308L6.71502 2.51475C6.50961 2.30933 6.16961 2.30933 5.96419 2.51475C5.86503 2.621 5.80836 2.75559 5.80836 2.89017Z" fill="#222F5D" />
                        </svg>
                    </div></Link>
                    <div className='font-extrabold text-base text-slate-600 '>{product.name}</div>
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
                        <h1>{product.name}</h1>
                    </div>
                </div>
                <div className='px-4  mt-14'>
                    <div className='flex flex-col md:flex-row'>
                        <div className='md:flex md:w-2/3'>
                            <div className='md:w-2/3'>
                                <div className='px-10'><img className='rounded-2xl shadow-xl' src={product.src1} /></div>
                                <div className='flex px-10 justify-around'>{product.src2.length && product.src2.map(item => <img className='w-24 rounded-xl shadow-xl my-6 ' src={item} />)}</div>
                            </div>
                            <div className='px-6 md:w-2/3'>
                                <h1 className='text-center my-4 text-xl'>{product.name}</h1>
                                <div>
                                    <div className='flex justify-between my-4'>
                                        <h1 className='text-slate-600'>اتنخاب رنگ</h1>
                                        <div className='flex relative'>
                                            {product.color.map((color, index) =>
                                                <div className={`h-[20px] w-[20px] -mr-[5px] border rounded-full bg-${color}-600`}></div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='mb-4'>
                                        <h1 className='mt-4'>فروشنده : <span className='text-slate-600'>ویسی شاپ</span></h1>
                                        <h1 className='mt-4'>گارانتی : <span className='text-slate-600'>18 ماه</span></h1>
                                        <h1 className='mt-4'>ارسال از : <span className='text-slate-600'>انبار جوانرود</span></h1>
                                    </div>
                                    <div>
                                        <h1 className='mt-8 mb-4'>ویژگی های کالا</h1>
                                        <div className='flex justify-between text-sm mt-3'>
                                            <h2>تعداد تنظیمات سرعت :</h2>
                                            <h2 className='text-stone-600'>۶سرعته</h2>
                                        </div>
                                        <div className='flex justify-between text-sm mt-3'>
                                            <h2>چرخش اتوماتیک کاسه :</h2>
                                            <h2 className='text-stone-600'> ندارد</h2>
                                        </div>
                                        <div className='flex justify-between text-sm mt-3'>
                                            <h2>جنس بدنه :</h2>
                                            <h2 className='text-stone-600'>استیل و پلاستیک</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/3 mt-5'>
                            <div className='shadow-lg bg-stone-100 rounded-2xl p-2 mb-4'>
                                <h1 className='mt-5'>فروشنده : ویسی شاپ</h1>
                                <h1 className='mt-5'>گارانتی : 18 ماه</h1>
                                <h1 className='mt-5'>ارسال از : انبار جوانرود</h1>
                                <div className='flex justify-between mt-8 items-center'>
                                    <button onClick={addToCart} className='bg-orange-500 text-white rounded-xl p-3 text-sm mi:text-base md:text-sm lg:text-base px-2 mi:px-6'>اضافه به سبد خرید</button>
                                    <ToastContainer position="top-left" theme="dark" autoClose={4000} rtl={true} />
                                    <div>
                                        {percent > 0 && <p className='text-xs mi:text-sm md:text-xs lg:text-sm text-end line-through text-stone-600'>{`${convertDigitsEnToFa(numericalSeparator(product.price.toString(), 3, ','))} تومان`}</p>}
                                        <p className='text-orange-600 text-sm mi:text-base md:text-sm lg:text-base'>{`${convertDigitsEnToFa(numericalSeparator((product.price - percent).toString(), 3, ','))} تومان`}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <h1 className='my-4 text-orange-500 text-xl'>نقد و بررسی این محصول</h1>
                        <p className=''>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        <h1 className='my-4 text-orange-500 text-xl'>ویژگی های محصول</h1>
                        <p className=''>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        <h1 className='my-4 text-orange-500 text-xl'>مشخصات ظاهری</h1>
                        <p className=''>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                    </div>
                </div>
                {/*  btm bar */}
                <div className='md:hidden'>
                    <BottomBar page='' />
                </div>
            </div>
            <Footer />
        </>
    )
}
