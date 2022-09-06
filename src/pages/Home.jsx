import React from 'react'
import Announcement from '../component/Announcement'
import Categories from '../component/Categories'
import Navbar from '../component/Navbar'
import Product from '../component/Product'
import Slider from '../component/Slider'

const Home = () => {
  return (
    <div>
    <Announcement />
    <Navbar />  
    <Slider />   
    <Categories />
    <Product />
    </div>
  )
}

export default Home
