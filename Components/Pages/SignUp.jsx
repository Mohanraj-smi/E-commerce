import React from 'react'
import './CSS/SignUp.css';
import { Container,Col } from 'react-bootstrap';


function SignUp({FormData,setFormData}) {
  
  return (
    <Container fluid>
    <Col xs={12} className='signup-container'>
      
        <input type='Email' value={FormData.email} onChange={(event)=>setFormData({...FormData, email: event.target.value})} placeholder='Enter Your Email...'/>
        <input type='Password' value={FormData.password} onChange={(event)=>setFormData({...FormData, password: event.target.value})} placeholder='Enter Your Password...'/>
        <input type='password' value={FormData.confirmpassword} onChange={(event)=>setFormData({...FormData, confirmpassword: event.target.value})} placeholder='Confirm Password...'/>

    </Col>
  </Container>
  
  )
}

export default SignUp;