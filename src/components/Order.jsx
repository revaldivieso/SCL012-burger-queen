import React from "react";
import "./Order.css";

const Order = props => (
  <div className="Order-detail">
    <h2>Resumen de Compra</h2>
    {props.car.map(i => (
      <div className="order-items">
        <h4>{i.name}</h4>
        <span>
        <h5>{i.price}</h5>
        </span>
      </div>
    ))}
  </div>
);

export default Order;
