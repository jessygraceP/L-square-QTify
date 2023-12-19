import React from 'react';
import '../Herosection/Herosection.css'
import headphone from '../../assets/headphone.svg';

const Herosection = () => {
  return (
   
   <div className='hs-Container'>
    <div className='hs-Content'>
      <div>
         <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
        </div>
        <div className='hs-img-frame'>
        <img className='hs-img'
        src={headphone}
        alt='heroImage'
       />
        </div>
      </div>
     
    </div>
 
  )
}

export default Herosection;