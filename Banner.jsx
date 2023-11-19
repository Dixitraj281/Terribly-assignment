import React from 'react'
import "./Banner.css"
import bannerimg from '../Assets/banner.png'

function Banner() {
  return (
    <div className='parent'>
        <img src={bannerimg} alt="Banner Img" className='img'/>
    </div>
  )
}

export default Banner
