import React, { Component } from 'react';
// import './App.css';
 import { Container, Row, Col } from 'react-bootstrap';
import MenuData from "./menu";
import Data from "./data";
import { Route } from "react-router-dom";


class ContainerMenu extends Component {
    render() {
        return (
        <Container className="menu">
            <h1>Selección Menú</h1>
            <Row>
              <Col>
              {Data.map(i => <Route path={`/waiter/${i.name}`} render={props => <MenuData items={i.items} /> }/>)}
              </Col>
            </Row>
          </Container>

            
        )
    }

}

export default ContainerMenu;

