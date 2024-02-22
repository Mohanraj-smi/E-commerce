import React, { useContext } from 'react'
import './ProductDisplay.css'
import Staricon from '../Assets/star_icon.png';
import Stardull from '../Assets/star_dull_icon.png';
import { ShopContext } from '../Context/ShopContext';
import { Col, Container, Row } from 'react-bootstrap';



const ProductDisplay = (props) => {
const {products}=props;
const {addToCart}=useContext(ShopContext);

  return (
    <Container className='productdisplay '>
      <Row className='justify-content-center'>
        <Col xs={12} md={6} className="productdisplay-left">
            <div className="productdisplay-img-list">
             <img src={products.Image} alt='' />
             <img src={products.Image} alt=''  />
             <img src={products.Image} alt=''  />
             <img src={products.Image} alt=''  />
           
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={products.Image}  alt='' />
            </div>
            
        </Col>
        <Col xs={12} md={6}   className='productdisplay-right '>
          <h1>{products.Name}</h1>
          <div className="productdisplay-right-star">
           4.4 <img src={Staricon} alt='star' />
            <img src={Staricon} alt='' />
            <img src={Staricon} alt='' />
            <img src={Stardull} alt='' />
          </div>
          <div className='productdisplay-right-prices'>
            ${products.price}
          </div>
          <div className="productdisplay-right-description">
            A lightweight,usually Knitted, pullover shirt, close-fitting and with a round neckline and 
            short sleeves, worn as an <span>undershirt or outer with garment</span> </div>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className='productdisplay-right-sizes'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            
            </div>
          </div>
          <button onClick={()=>{addToCart(products.id)}}>ADD TO CART</button>
        </Col>
        
    </Row>
    </Container>
  )
}

export default ProductDisplay;