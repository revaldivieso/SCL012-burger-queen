import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Link to='/waiter'>
            <Button size='lg'>
              Pedidos
              </Button>
          </Link>
        </Col>
        <Col>
          <Link to='/kitchen'>
            <Button size='lg'>
              Cocina
              </Button>
          </Link>
        </Col>
      </Row>
    </Container>

  )
}