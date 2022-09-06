import React from 'react'
import Announcement from '../component/Announcement'
import Categories from '../component/Categories'
import Navbar from '../component/Navbar'
import Slider from '../component/Slider'

const Home = () => {
  return (
    <div>
    <Announcement />
    <Navbar />  
    <Slider />   
    <Categories />
    </div>
  )
}

export default Home
