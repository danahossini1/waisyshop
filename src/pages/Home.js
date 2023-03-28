
import react, { useCallback, useEffect, useState } from 'react';
import Carts from '../Components/Carts';
import products from '../data';
import Filter from '../Components/Filter';
import SmHeader from '../Components/SmHeader';
import MdHeader from '../Components/MdHeader';
import BottomBar from '../Components/BottomBar';
import Grooping from '../Components/Grooping';
import SearchCart from '../Components/SearchCart';


function Home() {

  const [openFilter, setOpenFilter] = useState('brand')
  const [filter, setFilter] = useState('all')
  const [mdPage, setMdPage] = useState('home')
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


  useEffect(() => {
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

  const mdPagebar = (id) => {
    setMdPage(id)
  }

  const categoryShow = (id) => {
    setCategory(id)
  }

  const filterAction = () => {

    setShowProduct(allproduct)
    let allprod = allproduct

    if (filterMaxPrice && filterMaxPrice.length) {
      allprod = allproduct.filter(item => (filterMinPrice !== null ? item.price > 0 : item.price > filterMinPrice) && item.price < filterMaxPrice)

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

    let product = allproduct.filter(item => item.name.includes(searchValue))
    setSearchProduct(product)

    if (searchValue.length < 2) {
      setSearchProduct([])
    }




  },[searchValue])


  return (
    <div className='bg-gray-100 px-6 font-bold '>
      {/* header */}
      <div className={`${isSearchShow ? 'absolute -translate-x-0' : 'hidden'} -translate-x-[600px] top-5 right-1  z-30 bg-stone-200 h-12 w-5/6 font-bold text-xs p-3 pr-10 rounded-lg `}>
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
          <span className='mr-2 text-sm font-bold text-slate-600'>
            {filter === 'all' && 'همه محصولات' || filter === 'expensive' && 'گران ترین' || filter === 'inexpensive' && 'ارزان ترین' || filter === 'popular' && 'محبوب ترین' || filter === 'visited' && 'پر بازدید ترین'}</span>



        </div>
        <div onClick={() => setBrandFilterShow(true)} className='bg-white rounded-md text-stone-800 cursor-pointer w-1/2 my-2 flex py-1' >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
          </svg>
          <span className='mr-2 text-sm font-bold text-slate-600'>فیلتر کردن بر اساس :</span>

        </div>
      </div>
      {/* sm  : filterShow */}
      <div onClick={() => {
        setBrandFilterShow(false)
        setPriceFilterShow(false)
        setIsSearchShow(false)
      }} className={`${brandFilterShow || priceFilterShow || isSearchShow ? 'fixed' : 'hidden'}   fixed bg-neutral-600 opacity-60 botton-0 top-0 left-0 right-0 h-full z-20 `}>
      </div>
      <div className={`${brandFilterShow ? 'fixed' : ' hidden'}  bg-white  rounded-t-3xl bottom-0 left-0 right-0 p-4 z-30 h-1/2`}>
        <Filter openFilter={openFilter} filterShow={filterShow} filterMinPrice={filterMinPrice} setFilterMinPrice={setFilterMinPrice} filterMaxPrice={filterMaxPrice} setFilterMaxPrice={setFilterMaxPrice} filterAction={filterAction} setFilterMark={setFilterMark} filterMark={filterMark} />

      </div>
      <div className={`${priceFilterShow ? 'fixed' : ' hidden'}   bg-white rounded-t-3xl bottom-0 left-0 right-0 p-4 z-30 h-1/2`}>
        <Grooping filterProduct={filterProduct} filter={filter} flex={'col'} />
        <button onClick={() => setPriceFilterShow(false)} className='bg-blue-700 mt-8 rounded-lg shadow-2xl text-sm shadow-slate-800 px-5 text-white p-2'>تایید</button>
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
        <div className='bg-stone-50 col-span-2 p-2 hidden md:block'>
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
        <div className='col-span-12 md:col-span-10'>

          {/* md:filter */}
          <div className='hidden md:flex gap-7 bg-stone-50 mt-4 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-orange-700 bg-orange-300 rounded-lg p-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
            </svg>
            <Grooping filterProduct={filterProduct} filter={filter} />
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 relative'>

            {showProduct.length ?
              (category === 'all' ?
                (filter === 'all' && showProduct.map((item, index) => { return <Carts key={index} {...item} /> })) ||
                (filter === 'expensive' && showProduct.sort((a, b) => a.price - b.price).reverse().map((item, index) => { return <Carts key={index} {...item} /> })) ||
                (filter === 'inexpensive' && showProduct.sort((a, b) => a.price - b.price).map((item, index) => { return <Carts key={index} {...item} /> })) ||
                (filter === 'popular' && showProduct.sort(() => 0.5 - Math.random()).map((item, index) => { return <Carts key={index} {...item} /> })) ||
                (filter === 'visited' && showProduct.sort(() => 0.5 - Math.random()).map((item, index) => { return <Carts key={index} {...item} /> }))
                :
                (filter === 'all' && showProduct.filter(product => product.grop === category).map((item, index) => { return <Carts key={index} {...item} /> })) ||
                (filter === 'expensive' && showProduct.filter(product => product.grop === category).sort((a, b) => a.price - b.price).reverse().map((item, index) => { return <Carts key={index} {...item} /> })) ||
                (filter === 'inexpensive' && showProduct.filter(product => product.grop === category).sort((a, b) => a.price - b.price).map((item, index) => { return <Carts key={index} {...item} /> })) ||
                (filter === 'popular' && showProduct.filter(product => product.grop === category).sort(() => 0.5 - Math.random()).map((item, index) => { return <Carts key={index} {...item} /> })) ||
                (filter === 'visited' && showProduct.filter(product => product.grop === category).sort(() => 0.5 - Math.random()).map((item, index) => { return <Carts key={index} {...item} /> }))
                // showProduct.filter(product => product.grop === category).map((item, index) => { return <Carts key={index} {...item} /> }))
              )
              :
              (<h1 className='bg-red-600 rounded-3xl w-full absolute top-10 text-center text-2xl py-5 '> هیج محصولی یافت نشد</h1>)
            }
          </div>
        </div>
      </div>
      {/* bottom bar */}
      <BottomBar mdPage={mdPage} mdPagebar={mdPagebar} />

    </div>

  );
}

export default Home;




