import React from "react";
import Layout from "../components/Layout";
import Order from "../components/Order";
import ContainerMenu from "../components/ContainerMenu";
import SideBar from "../components/Sidebar";
import { Row, Col } from "react-bootstrap";
import Navigation from "../components/Navigation";
import "./Grilla.css";

export const Waiter = () => {
  const [car, setCar] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const onPurcharse = (item) => {
    const newCar = [...car];
    newCar.push(item);
    setCar(newCar);
    setTotal(totalPrice(newCar));
  };

  const removeItem = (item, i) => {
    const newCar = [...car];
    newCar.splice(i, 1);
    setCar(newCar);
    setTotal(totalPrice(newCar));
  };

  const totalPrice = (car) => {
    return car.reduce((a, c) => a + c.price || 0, 0);
  };

  return (
    <Layout>
      <Navigation />
      <Row>
        <Col className="col-sidebar">
          <SideBar />
        </Col>
        <Col className="col-menu">
          <ContainerMenu onPurcharse={onPurcharse} />
        </Col>
        <Col className="col-order">
          <Order car={car} removeItem={removeItem} total={total} />
        </Col>
      </Row>
    </Layout>
  );
};
