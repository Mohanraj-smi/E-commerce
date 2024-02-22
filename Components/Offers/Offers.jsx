import React from 'react'
import geo from '../Assets/offerimg.png';
import './Offers.css';
import {  Col, Container, Row } from 'react-bootstrap';

function Offers() {
  return (
    <Container fluid className='offers'>
      <Row className='justify-content-center align-items-center'>
        <Col md={6} xs={12} className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCT</p>
            <button>CHECK BOX</button>
        </Col>
        <Col md={6} xs={12} className='offers-right'>
            <img src={geo} alt='offer-img' className='smi img-fluid'/>
        </Col>
        </Row>
    </Container>
  )
}

export default Offers;