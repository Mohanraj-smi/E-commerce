import React from 'react'
import './Popular.css';
import { Datas } from '../../DataProduct';
import Items from '../Items/Items';
import { Col, Container, Row } from 'react-bootstrap';


const Popular=()=> {
  return (
    <Container fluid className='popular'>
      <Row className='justify-content-center align-items-center'>
        <Col xs={12} className='text-center'>
       <h1>POPULAR IN WOMAN </h1>
        <hr className='justify-content-center mb-4'></hr>
        </Col>
        
        <Col xs={12} className='popular-item'>
            {Datas.map((item,i)=>{
                return <Items key={i} id={item.id} Name={item.Name} Image={item.Image} price={item.price} />

            })} 


        </Col>

    </Row>
    </Container>
  )
}

export default Popular;