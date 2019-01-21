import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

let hour = '00'
let minute = '30'
let second = '00'
class App extends Component {
  render() {
    return (
      <Container className="App">
        <Row className='m-t-50'>
          <Col className='font-xl'>{hour}:{minute}:{second}</Col>
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
}

export default App;
