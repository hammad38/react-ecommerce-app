import React from 'react'
import Announcement from '../component/Announcement'
import Categories from '../component/Categories'
import Navbar from '../component/Navbar'
import Products from '../component/Products'
import Slider from '../component/Slider'

const Home = () => {
  return (
    <div>
    <Announcement />
    <Navbar />  
    <Slider />   
    <Categories />
    <Products />
    </div>
  )
}

export default Home
