import React from 'react'
import './Hero.css';
import leo from '../Assets/leo.png';
import { Col, Container, Row } from 'react-bootstrap';




const Hero=()=> {
  return (
    <div className='hero'>
    <Container>
      <Row>
        <Col md={6} xs={12}>
        <div className='hero-left'>
      
      <h2 className='display-1'>New Summer <span id='collect'>collections</span></h2>
      <button>Shop Now</button>
      </div>
        </Col>
        <Col md={6} xs={12}>
        <div className='hero-right'>
        <img src={leo} alt='heroimg' className='back-img'/>
       </div>
        </Col>
      </Row>
    </Container>
    </div>




    
  
  )
}

export default Hero;