import React from 'react'
import "./Profile.css";
import Banner from './Banner';
import Dp from './Dp';
import Details from './Details'
// import tick from '../Assets/verified.png'
import Postcount from './postcount';
import One from './Post1'
import Two from './Post2'
import Three from './Post3'
// import Connect from './Connections'


function Profile() {
  return (
    
    <div className='parent'>
      <Banner/>
      <Dp/>
      {/* <Connect/> */}
      {/* <div className="user-detail">
        <div className='username'>Dixit Raj</div>
        <img src={tick} alt="verified tick" className='verified'/>
      </div> */}
      <Details/>
      <Postcount/>
      <One/>
      <Two/>
      <Three/>
    </div>

  )
}

export default Profile
