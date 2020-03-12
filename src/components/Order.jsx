import React from "react";
import "./Order.css";
import { Waiter } from "../views/Waiter";

const Order = props => (
  <div className="Order-detail">
    <h2>Resumen de Compra</h2>
    <form>
      <label>
        Número de mesa:
        <input type="text" name="name" />
      </label>
    </form>
    {props.car.map((item, index) => (
      <div className="order-items">
        <p>{item.name}</p>
        <p>{item.price}</p>
        <button onClick={() => props.removeItem(item, index)} className="btn-send">
          X
        </button>
      </div>
    ))}
    <button className="btn-send">Enviar</button>
  </div>
);

export default Order;
