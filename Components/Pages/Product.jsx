import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import Bredcrum from '../Bredcrum/Bredcrum';
import Description from '../Description/Description';
import RelatedProducts from '../RelatedProducts/RelatedProducts';


function Product() {
  const {PRODUCTS}=useContext(ShopContext);
  const {id}=useParams();
  
  const products=PRODUCTS.find((e)=>e.id === Number(id));
 
 

  return (
    <div>
    <Bredcrum products={products}  />
    <ProductDisplay products={products}/>
    <Description />
    <RelatedProducts />
     
      
      
    </div>
  )
}

export default Product;