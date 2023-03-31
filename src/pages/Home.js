
import react, { useCallback, useEffect, useState } from 'react';
import Carts from '../Components/Carts';
import products from '../data';
import Filter from '../Components/Filter';
import SmHeader from '../Components/SmHeader';
import MdHeader from '../Components/MdHeader';
import BottomBar from '../Components/BottomBar';
import Grooping from '../Components/Grooping';
import SearchCart from '../Components/SearchCart';
import Footer from '../Components/Footer';
import { convertDigitsFaToEn } from 'persian-utilities';



function Home() {

  const [openFilter, setOpenFilter] = useState('brand')
  const [filter, setFilter] = useState('all')

  const [category, setCategory] = useState('all')
  const [allproduct, setAllProduct] = useState([...products.juc, ...products.oto, ...products.tee].sort(() => 0.5 - Math.random()))
  const [showProduct, setShowProduct] = useState([])

  const [brandFilterShow, setBrandFilterShow] = useState(false)
  const [priceFilterShow, setPriceFilterShow] = useState(false)
  const [isSearchShow, setIsSearchShow] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [searchProduct, setSearchProduct] = useState([])
  const [filterMinPrice, setFilterMinPrice] = useState(null)
  const [filterMaxPrice, setFilterMaxPrice] = useState(null)
  const [filterMark, setFilterMark] = useState([])
  const [loadPage, setLoadPage] = useState(false)

  const loadimg = () => {
    setLoadPage(true)
  }


  useEffect(() => {

    window.scrollTo(0, 0);

    setShowProduct(allproduct)
  }, [])




  const filterShow = (id) => {
    if (openFilter === id) {
      setOpenFilter('')
    } else {
      setOpenFilter(id)
    }
  }

  const filterProduct = (id) => {
    setFilter(id)
  }



  const categoryShow = (id) => {
    setCategory(id)
  }

  const filterAction = () => {

    setShowProduct(allproduct)
    let allprod = allproduct

    if (filterMaxPrice && filterMaxPrice.length) {
      allprod = allproduct.filter(item => (filterMinPrice !== null ? item.price > 0 : item.price > filterMinPrice) && item.price < convertDigitsFaToEn(filterMaxPrice.toString()))

    }

    if (filterMark.length) {
      let markFilter = []
      filterMark.map(mark => markFilter.push(...allprod.filter(item => item.brand === mark)))
      allprod = markFilter
    }
    setShowProduct(allprod)
    setBrandFilterShow(false)
  }
  const searchShow = () => {
    setIsSearchShow(bef => !bef)
  }

  const searchChange = useCallback(e => {

    setSearchValue(e.target.value)

    let product = allproduct.filter(item => item.detailes.includes(searchValue))
    setSearchProduct(product)

    if (searchValue.length < 2) {
      setSearchProduct([])
    }
  }, [searchValue])

  return (
    < div className='relative' >
      <div className='bg-gray-100 min-h-screen px-6 font-bold pb-8 relative'>
        {/* header */}
        <div className={`${isSearchShow ? 'absolute ' : 'hidden'}  top-5 right-1  z-30 bg-stone-200 h-12 w-5/6 font-bold text-xs p-3 pr-10 rounded-lg `}>
          <svg className='absolute right-2' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='text-slate-800' d="M9.58317 17.4998C13.9554 17.4998 17.4998 13.9554 17.4998 9.58317C17.4998 5.21092 13.9554 1.6665 9.58317 1.6665C5.21092 1.6665 1.6665 5.21092 1.6665 9.58317C1.6665 13.9554 5.21092 17.4998 9.58317 17.4998Z" stroke="#222F5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.3332 18.3332L16.6665 16.6665" stroke="#222F5D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <input type="text" placeholder='جستجوی نام محصول، نام برند؛...' value={searchValue} onChange={(e) => searchChange(e)} className='bg-stone-200 w-full h-full focus:outline-none text-lg' />
          <div className='mt-3 absolute right-0 w-full'>
            {searchProduct.map(item => <a className='cursor-pointer'><SearchCart {...item} /></a>)}

          </div>
        </div>
        <SmHeader searchShow={searchShow} />

        {/* sm: filter  */}
        <div className='flex md:hidden justify-around items-center gap-3 mt-2'>
          <div onClick={() => setPriceFilterShow(true)} className='bg-white rounded-md text-slate-800 cursor-pointer w-1/2 my-2 ml-2 flex py-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
            </svg>
            <span className='mr-2 text-xs mi:text-sm font-bold text-slate-600'>
              {filter === 'all' && 'همه محصولات' || filter === 'expensive' && 'گران ترین' || filter === 'inexpensive' && 'ارزان ترین' || filter === 'popular' && 'محبوب ترین' || filter === 'visited' && 'پر بازدید ترین'}</span>



          </div>
          <div onClick={() => setBrandFilterShow(true)} className='bg-white rounded-md text-stone-800 cursor-pointer w-1/2 my-2 flex py-1' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
            </svg>
            <span className='mr-2 text-xs mi:text-sm font-bold text-slate-600'>فیلتر بر اساس :</span>

          </div>
        </div>
        {/* sm  : filterShow */}
        <div onClick={() => {
          setBrandFilterShow(false)
          setPriceFilterShow(false)
          setIsSearchShow(false)
        }} className={`${brandFilterShow || priceFilterShow || isSearchShow ? 'fixed' : 'hidden'}   fixed bg-neutral-600 opacity-60 botton-0 top-0 left-0 right-0 h-full z-20 `}>
        </div>
        <div className={`${brandFilterShow ? 'fixed' : ' hidden'}  bg-white  rounded-t-3xl bottom-0 left-0 right-0 p-4 z-30 h-2/3 mi:h-1/2`}>
          <Filter openFilter={openFilter} filterShow={filterShow} filterMinPrice={filterMinPrice} setFilterMinPrice={setFilterMinPrice} filterMaxPrice={filterMaxPrice} setFilterMaxPrice={setFilterMaxPrice} filterAction={filterAction} setFilterMark={setFilterMark} filterMark={filterMark} />

        </div>
        <div className={`${priceFilterShow ? 'fixed' : ' hidden'}   bg-white rounded-t-3xl bottom-0 left-0 right-0 p-4 z-30 h-1/2`}>
          <div className=' flex justify-between'>
            <div className=''>
              <Grooping filterProduct={filterProduct} filter={filter} flex={'col'} />
            </div>
            <div className='flex flex-col w-1/2 text-xs mi:text-lg'>
              <h1 className='text-orange-400 '>دسته بندی</h1>
              <div onClick={() => { categoryShow('all') }} className={`mt-2 flex items-center cursor-pointer p-2 transition-all duration-500 ${category === 'all' ? 'text-slate-900 bg-purple-400 rounded-xl' : 'text-slate-400'} `} >
                همه محصولات</div>
              <div onClick={() => { categoryShow('juc') }} className={`mt-2 flex items-center cursor-pointer p-2 transition-all duration-500 ${category === 'juc' ? 'text-slate-900 bg-purple-400 rounded-xl' : 'text-slate-400'} `} >
                آبمیوه‌گیری</div>
              <div onClick={() => { categoryShow('oto') }} className={`mt-2 flex items-center cursor-pointer p-2 transition-all duration-500 ${category === 'oto' ? 'text-slate-900 bg-purple-400 rounded-xl' : 'text-slate-400'}`}>

                اتو</div>
              <div onClick={() => { categoryShow('tee') }} className={`mt-2 flex items-center cursor-pointer p-2 transition-all duration-500 ${category === 'tee' ? 'text-slate-900 bg-purple-400 rounded-xl' : 'text-slate-400'} `}>

                چایی ساز</div>
            </div>
          </div>
          <button onClick={() => setPriceFilterShow(false)} className='bg-blue-700 mt-8 rounded-lg shadow-2xl text-sm shadow-slate-800 px-7 text-white p-3'>تایید</button>
        </div>

        {/* md page */}
        <div className='grid grid-cols-12 gap-3'>
          {/* header */}
          <MdHeader searchValue={searchValue} searchChange={searchChange} >
            <div className='mt-3 absolute top-10 z-20'>
              {searchProduct.map(item => <a className='cursor-pointer'><SearchCart {...item} /></a>)}
            </div>
          </MdHeader>
          {/* md sidebar */}
          <div className='bg-stone-50 col-span-3 lg:col-span-2 p-2 hidden md:block'>
            <h1 className='text-orange-400 '>دسته بندی</h1>
            <div onClick={() => { categoryShow('all') }} className={`mt-2 flex items-center cursor-pointer p-2 transition-all duration-500 ${category === 'all' ? 'text-slate-900 bg-purple-400 rounded-xl' : 'text-slate-400'} `} >
              همه محصولات</div>
            <div onClick={() => { categoryShow('juc') }} className={`mt-2 flex items-center cursor-pointer p-2 transition-all duration-500 ${category === 'juc' ? 'text-slate-900 bg-purple-400 rounded-xl' : 'text-slate-400'} `} >
              آبمیوه‌گیری</div>
            <div onClick={() => { categoryShow('oto') }} className={`mt-2 flex items-center cursor-pointer p-2 transition-all duration-500 ${category === 'oto' ? 'text-slate-900 bg-purple-400 rounded-xl' : 'text-slate-400'}`}>

              اتو</div>
            <div onClick={() => { categoryShow('tee') }} className={`mt-2 flex items-center cursor-pointer p-2 transition-all duration-500 ${category === 'tee' ? 'text-slate-900 bg-purple-400 rounded-xl' : 'text-slate-400'} `}>

              چایی ساز</div>

            <Filter openFilter={openFilter} filterShow={filterShow} filterMinPrice={filterMinPrice} setFilterMinPrice={setFilterMinPrice} filterMaxPrice={filterMaxPrice} setFilterMaxPrice={setFilterMaxPrice} filterAction={filterAction} setFilterMark={setFilterMark} filterMark={filterMark} />
          </div>
          {/* cards */}
          <div className='col-span-12 md:col-span-9 lg:col-span-10'>

            {/* md:filter */}
            <div className='hidden md:flex gap-7 bg-stone-50 mt-4 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-orange-700 bg-orange-300 rounded-lg p-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
              </svg>
              <Grooping filterProduct={filterProduct} filter={filter} />
            </div>

            <div className=' relative pb-24 '>
              <div className={`${loadPage && 'hidden'} text-center mt-16`} role="status">
                <svg aria-hidden="true" className="inline w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
              <div className={`${loadPage ? 'grid' : 'hidden'}  grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4`}>
                {showProduct.length ?
                  (category === 'all' ?
                    (filter === 'all' && showProduct.map((item, index) => { return <Carts key={index} {...item} loadimg={loadimg} /> })) ||
                    (filter === 'expensive' && showProduct.sort((a, b) => a.price - b.price).reverse().map((item, index) => { return <Carts key={index} {...item} loadimg={loadimg} /> })) ||
                    (filter === 'inexpensive' && showProduct.sort((a, b) => a.price - b.price).map((item, index) => { return <Carts key={index} {...item} loadimg={loadimg} /> })) ||
                    (filter === 'popular' && showProduct.sort(() => 0.5 - Math.random()).map((item, index) => { return <Carts key={index} {...item} loadimg={loadimg} /> })) ||
                    (filter === 'visited' && showProduct.sort(() => 0.5 - Math.random()).map((item, index) => { return <Carts key={index} {...item} loadimg={loadimg} /> }))
                    :
                    (filter === 'all' && showProduct.filter(product => product.grop === category).length ? showProduct.filter(product => product.grop === category).map((item, index) => { return <Carts key={index} {...item} loadimg={loadimg} /> }) : <h1 className='bg-red-600 rounded-3xl w-full absolute top-10 text-center text-2xl py-5 '> هیج محصولی یافت نشد</h1>) ||
                    (filter === 'expensive' && showProduct.filter(product => product.grop === category).length ? showProduct.filter(product => product.grop === category).sort((a, b) => a.price - b.price).reverse().map((item, index) => { return <Carts key={index} {...item} loadimg={loadimg} /> }) : <h1 className='bg-red-600 rounded-3xl w-full absolute top-10 text-center text-2xl py-5 '> هیج محصولی یافت نشد</h1>) ||
                    (filter === 'inexpensive' && showProduct.filter(product => product.grop === category).length ? showProduct.filter(product => product.grop === category).sort((a, b) => a.price - b.price).map((item, index) => { return <Carts key={index} {...item} loadimg={loadimg} /> }) : <h1 className='bg-red-600 rounded-3xl w-full absolute top-10 text-center text-2xl py-5 '> هیج محصولی یافت نشد</h1>) ||
                    (filter === 'popular' && showProduct.filter(product => product.grop === category).length ? showProduct.filter(product => product.grop === category).sort(() => 0.5 - Math.random()).map((item, index) => { return <Carts key={index} {...item} loadimg={loadimg} /> }) : <h1 className='bg-red-600 rounded-3xl w-full absolute top-10 text-center text-2xl py-5 '> هیج محصولی یافت نشد</h1>) ||
                    (filter === 'visited' && showProduct.filter(product => product.grop === category).length ? showProduct.filter(product => product.grop === category).sort(() => 0.5 - Math.random()).map((item, index) => { return <Carts key={index} {...item} loadimg={loadimg} /> }) : <h1 className='bg-red-600 rounded-3xl w-full absolute top-10 text-center text-2xl py-5 '> هیج محصولی یافت نشد</h1>)
                  )
                  :
                  (<div>

                    <h1 className='bg-red-600 rounded-3xl w-full absolute top-10 text-center text-2xl py-5 '> هیج محصولی یافت نشد</h1>
                  </div>)
                }
              </div>
            </div>
          </div>
        </div>
        {/* bottom bar */}
        <BottomBar page='home' />
        <div className='absolute bottom-0 z-0 left-0 right-0'>
          <Footer />
        </div>
      </div>

    </div >

  );
}

export default Home;




