import React, { useContext } from 'react'
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Items from '../Items/Items';
import { Col, Row } from 'react-bootstrap';


const ShopCategory=(props)=> {
  const {PRODUCTS} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img src={props.banner} alt='banner' className='shopcategory-banner' />
      <div className='shopcategory-indexsort'>
        <p>
         <span>Showing 1-12</span>Out Of 36 Products
        </p>
      </div>
      <Row className='shopcategory-products'>
       {PRODUCTS.map((item,i)=>{
          if(props.category===item.category){
            return(
              <Col xs={12} sm={6} md={4} lg={3}>
            <Items key={i} id={item.id} Name={item.Name} Image={item.Image} price={item.price} />
            </Col>
            )
          }
        })}
      </Row>



    </div>
  )
}

export default ShopCategory;