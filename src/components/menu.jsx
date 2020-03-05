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
    return this.state.data.map((item, i) => {
      console.log(item);
    return <li key={i}>{item.items[0].name}</li>
    });
  }
}
export default MenuData;
