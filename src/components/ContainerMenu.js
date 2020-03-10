import React, { Component } from 'react';
 import { Container, Row, Col } from 'react-bootstrap';
import MenuData from "./menu";
import Data from "./data";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./ContainerMenu.css"


class ContainerMenu extends Component {
    render() {
        return (
        <Container className="menu">
            <Row className="Row-card">
              <Col className="Col-items">
              {Data.map(i => <Route path={`/waiter/${i.name}`} render={props => <MenuData onPurcharse={this.props.onPurcharse} items={i.items} /> }/>)}
              </Col>
            </Row>
          </Container>

            
        )
    }

}

export default ContainerMenu;
