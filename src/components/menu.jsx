import React, { Component } from "react";
import data from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, CardDeck, Card } from "react-bootstrap";
import "./menu.css";

class MenuData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }
  render() {
    return (this.props.items || []).map((item, i) => {
      return (
        <CardDeck>
          <Card className="Card.menu">
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title key={i}>{item.name}</Card.Title>
              <Card.Text>{item.price}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button onClick={() => this.props.onPurcharse(item)} className="btn-card">Añadir</Button>
            </Card.Footer>
          </Card>
        </CardDeck>
      );
    });
  }
}
export default MenuData;
