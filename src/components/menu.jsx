import React, { Component } from "react";
import data from "./data";

class MenuData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }
  render() {
    return (this.props.items || []).map((item, i) => {
      return <li key={i}>{item.name}</li>;
    });
  }
}
export default MenuData;
