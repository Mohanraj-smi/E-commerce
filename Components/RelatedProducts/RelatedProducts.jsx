import React from 'react'
import './RelatedProducts.css';
import { Datas } from '../../DataProduct';
import Items from '../Items/Items';
import { Col, Container, Row } from 'react-bootstrap';

const RelatedProducts = () => {
  return (
    <Container fluid className='relatedproducts'>
      <Row className='justify-content-center'>
        <Col xs={12}>
        <h1>Related Products</h1>
        <hr className='justify-content-center '/>
        </Col>
        <Col xs={12} className='relatedproducts-items'>
            {Datas.map((item,i)=>{
                return <Items key={i} id={item.id} Name={item.Name} Image={item.Image} price={item.price}/>
            })}

        </Col>
        </Row>
    </Container>
  )
}

export default RelatedProducts;