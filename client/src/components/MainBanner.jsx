import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className='relative'>
        <img src={assets.main2_banner_bg} alt="mainBannerBg" className='w-full hidden md:block rounded-2xl'/>
        <img src={assets.main2_banner_bg_sm} alt="mainBannerBgSm" className='w-full md:hidden'/>
        <div className='absolute inset-0 flex flex-col items-center md:items-start justify-center md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
            {/* <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'
            >Guaranteed freshness delivered right to your door!</h1>*/}
            <h1 className=' text-[#12498a] tracking-wide font-face mb-5 xs text-7xl sm:text-9xl sm:pt-100 md:text-6xl md:pt-0 lg:text-8xl lg:pt-0 text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-10'
            >Fresh</h1>

            <h1 className=' text-[#f7931e] tracking-widest mt-5 font-face text-xl sm:text-2xl md:text-sm lg:text-xl font-medium text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-10'
            >FRUITS</h1>

            <h1 className=' text-[#6b6b6b] font-face text-xl sm:text-2xl  md:text-sm lg:text-xl font-medium text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-10'
            >Nature's Sweetest Picks — Fresh Fruits Straight from Farm to Table!</h1>

        <div className='flex items-center mt-5 font-medium'>
            <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>Shop Now
            <img className='md:hidden transition group-focus:translate-x-1' src={assets.white_arrow_icon} alt="arrow" /></Link>

            <Link to={"/products"} className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'>Explore deals
            <img className='transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt="arrow" /></Link>
        </div>
        </div>
    </div>
  )
}

export default MainBanner