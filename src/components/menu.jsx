import React, { Component } from "react";
//import ReactDOM from 'react-dom';
import data from "./data";
//import sidebar from './sidebar.js'

class MenuData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }
  render() {
    const menu = this.state.data.map((item, i) => { 
        <li>{item}</li>

      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{item.name}</h3>
            </div>
            <div className="card-body">
              <p>{item.item}</p>
            </div>
          </div>
        </div>
      );
    });
    console.log(menu);
    return (
      <div>
        <nav className="navbar">
          <a className="text-white">
            navigation
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">{menu}</div>
        </div>
      </div>
    );
  }
}
export default MenuData;
