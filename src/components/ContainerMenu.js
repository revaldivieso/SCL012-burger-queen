import React, { Component } from 'react';
// import './App.css';
 import { Container, Row, Col } from 'react-bootstrap';
import MenuData from "./menu";


class ContainerMenu extends Component {
    render() {
        return (
        <Container className="menu">
            <h1>Selección Menú</h1>
            <Row>
              <Col>
              <MenuData />
              </Col>
            </Row>
          </Container>

            
        )
    }

}

export default ContainerMenu;

