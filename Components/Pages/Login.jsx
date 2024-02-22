import React, { useEffect, useState } from 'react'
import Signup from './SignUp';
import Personal from './Personal';
import Spinner from 'react-bootstrap/Spinner';

import './CSS/Login.css';
import { Container } from 'react-bootstrap';

function Login() {
  const[Loading,setLoading]=useState(false);
  const[page,setPage]=useState(0);
  const[FormData,setFormData]=useState({
    email:"",
    password:"",
    confirmpassword:"",
    dateofbirth:"",
    gender:"",
    phonenumber:""
    

  })
  useEffect(()=>{
    console.log(FormData);
  });

  const handleCheck=()=>{
    setLoading(false);
    setTimeout(()=>{
      setPage(prevpage =>prevpage + 1);
      setLoading(true);
    },1000)
  }

  const FormTitles=["SignUp","Personal"];

  const PageDisplay =()=>{
    if(page === 0){
      return <Signup FormData={FormData} setFormData={setFormData} />
    } else if(page === 1){
      return <Personal FormData={FormData} setFormData={setFormData} />
    } 
  }


  return (
    <Container fluid className='form' onSubmit={(event)=> event.preventDefault()}>
      <div className='progressbar'>
        <div style={{width: page ===0 ? "33.3%" : page == 1 ? "100%": "100%"}}></div>
      </div>
      <Container className='form-container'>
        <div className='header'>
          <h1 >{FormTitles[page]}</h1>
        </div>
        <div className='body'>{PageDisplay()}</div>
        <div className='spinner'>
        {page === 0?<Spinner animation="border" variant="primary" /> : null}
        </div>

        <div className='botom'>
          <button disabled={page == 0} onClick={()=>{
            setPage((currPage)=>currPage - 1)
          }}>Prev</button>

          <button  
          onClick={()=>{
          if(page === FormTitles.length -1 ){
        alert("FORMS ARE SUBMITTED");

          } else{
            setPage((currPage)=>currPage + 1)
            }
      
          }}>
           
            {page === FormTitles.length -1 ? "submit" :" Next" }</button>
        </div>
      </Container>
    </Container>
  )
}

export default Login;