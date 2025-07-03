import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'

const Home = () => {
  return (
    <div className='mt-10'>
        <MainBanner />
        <Categories/>
        <FeaturedProducts/>
        
    </div>
  )
}

export default Home