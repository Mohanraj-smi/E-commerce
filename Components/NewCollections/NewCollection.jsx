import React from 'react'
import { New_collection } from '../../NewData';
import './NewCollection.css';
import Items from '../Items/Items';
import { Col, Container, Row } from 'react-bootstrap';

const NewCollection=()=> {
  return (
    <Container className='new-collections'>
      <Row className='justify-content-center align-items-center'>
        <Col xs={12} className='text-center'>
        <h1>NEW COLLECTIONS</h1>
        <hr className='justify-content-center' />
        </Col>
        <Col xs={12} className='collections'>
            {New_collection.map((item,i)=>{
                return <Items key={i} id={item.id} Name={item.Name} Image={item.Image} price={item.price} />
            })}
            
        </Col>
        </Row>
    </Container>
    
  )
}

export default NewCollection;