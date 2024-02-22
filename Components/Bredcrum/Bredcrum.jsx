import React from 'react'
import Arrowicon from '../Assets/breadcrum_arrow.png';
import './Bredcrum.css';

const Bredcrum=(props)=> {
  const {products}=props;
  return (
    
    <div className='bredcrum'> 
   HOME <img src={Arrowicon} alt='' /> SHOP <img src={Arrowicon} alt=''/> {products.category}<img src={Arrowicon} alt=''/>{products.Name}
    </div>
  )
}

export default Bredcrum;