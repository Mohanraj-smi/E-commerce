import React from 'react'
import './Description.css';
import { Col, Container, Row } from 'react-bootstrap';

const Description = () => {
  return (
    <Container fluid className='descriptionbox'>
      <Row>
        <Col xs={12} className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122) </div>
        </Col>
        <Col xs={12} md={6} lg={8} className='descriptionbox-description'>
            <p className='det'>An E-Commerce Website is an online platform that facilitates buying and selling of products
            or services over the internet servers as a virtual marketplace where businesses and individual showcase their products
            interact with customers and conducts transactions without the need for a physical presence.E-Commerce Websites have done.
            </p>
            <p className='singe'>
                E-Commerce Websites typically display products or services a detailed descriptions,images,prices
                and any available various <span id='mul'>(eg.,Sizes,Colors).Each product usually has its own detailed with
                relevant information..</span></p>
        </Col>
        </Row>
    </Container>
  )
}

export default Description;