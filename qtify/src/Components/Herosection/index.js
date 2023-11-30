import React from 'react';
import '../Herosection/Herosection.css'
import headphone from '../../assets/headphone.svg';

const Herosection = () => {
  return (
    <>
   <div className='wrapper'>
    <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <img
        src={headphone}
        alt='heroImage'
        height='212px'
        width='212px'></img>
    </div>
  </>
  )
}

export default Herosection;