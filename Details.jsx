import React from 'react'
import './Details.css'

function Details() {
  return (
    <div className='details'>
      <p>Co-founder & CEO at Terribly Tiny Tales</p>
      <a href="https://www.instagram.com/anujgosalia/">https://www.instagram.com/anujgosalia/</a>
      <div className='icons'>
      <span id="icon"><i class="fi fi-rr-star fav"></i>125</span> 
      <span id="icon"><i class="fi fi-rr-social-network like"></i> 12</span>
      <span id="icon"><i class="fi fi-rs-eye seen"> </i> 57.8K</span>
      <span id="icon"> <i class="fi fi-rs-heart roundheart"></i> 26.0K</span>
      </div>
    </div>
  )
}

export default Details
