import React from "react";
import "./Order.css";

const Order = props => (
  <div className="Order-detail">
    <h2>Resumen de Compra</h2>
    <form>
      <label>
        Número de mesa:
        <input type="text" name="name" />
      </label>
    </form>
    {props.car.map(i => (
      <div className="order-items">
        <h4>{i.name}</h4>
        <span>
          <h5>{i.price}</h5>
        </span>
      </div>
    ))}
    <input className="btn" type="submit" value="Enviar" />
  </div>
);

export default Order;
