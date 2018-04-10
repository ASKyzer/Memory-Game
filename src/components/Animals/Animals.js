import React from 'react';
import './Animals.css';
import Col from '../Col';

const Animals = props => 

  <Col size='lg-3 md-4 sm-6'>
    <div className='card'>
      <div className='img-container'>
        <img className='animal-img img-responsive img-fluid' onClick={()=>props.handleClick(props.id)} alt={props.name} src={props.image} id={props.id} key={props.id}/>
      </div>
    </div>
  </Col>

export default Animals;
