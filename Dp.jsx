import React from 'react'
import "./Dp.css"
import dp from"../Assets/anuj.jpg"
import Connect from './Connections'
function Dp() {
  return (
    <div className="stack">
      <div className='dp'>
      <img src={dp} alt="Dp-img"/>
    </div>
    <div className="stacktwo">
    <Connect/>
    </div>
    </div>
    
  )
}

export default Dp
