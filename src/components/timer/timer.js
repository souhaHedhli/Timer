import React from 'react';
import './timer.css';
import { Container, Row, Col } from 'reactstrap';
import msToTime from '../../converter.js'

const Timer =() => {
  /*constructor(props) {
    super(props);
    this.state = {
    time: 0,
  };
} */
const duration = 9600000
    return (
      <Container className="App">
        <Row className='m-t-50'>
          {msToTime(duration)}
        </Row>
        <Row>
          <Col className='font-s gray float-right'>
          <span className='p-75'>Hour</span>
          <span className='p-r-60'>Minute</span>
          <span className='p-r-50'>Second</span>
          </Col>
        </Row>
      </Container>
    );
  }

export default Timer;
