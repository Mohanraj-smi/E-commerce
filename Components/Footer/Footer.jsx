import React from 'react'
import './Footer.css';
import Facebook from '../Assets/facebook.svg';
import Twitter from '../Assets/twitter.svg';
import linkedin from '../Assets/linkedin.svg';
import instagram from '../Assets/insta.svg';
import wave from '../Assets/wave.png';
import { Col, Container, Row } from 'react-bootstrap';

const Footer=()=> {
  return (
    <div className='footer' >
      <div className='waves'>
      
        <div className='wave' id='wave1'><img src={wave} alt='wave' className='joe'/> </div>
        <div className='wave' id='wave2'></div>
        <div className='wave' id='wave3'></div>
        <div className='wave' id='wave4'></div>

      </div>
      <div className='social-icons'>
        <img src={Facebook} alt='facebook-logo' className='face-logo'/>
        <img src={Twitter} alt='twitter-logo' className='twitter'/>
        <img src={linkedin} alt='linkedin' className='linkedin-logo' />
        <img src={instagram} alt='insta' className='insta-logo'/>
      </div>
      <Container>
        <Row>
          <Col xs={12} >
      <ul className='menu'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#men'>Men</a></li>
        <li><a href='#woman'>Woman</a></li>
        <li><a href='#kids'>Kids</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      </Col>
      <Col xs={12}>
      <p>©2021 Mohan Shop | All Rights Reserved</p>
      </Col>
</Row>

</Container>
  
    </div>
  )
}

export default Footer;