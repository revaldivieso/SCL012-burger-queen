import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

class Menu extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={6}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={5}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        )
    }

}

export default Menu;



