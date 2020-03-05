import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout";
import MenuData from "./components/menu";
import Order from "./components/order";
//import firebaseConfig from './firebaseInit.js';

const App = () => {
  return (
    <Layout>
      <MenuData />
      <Order />
    </Layout>
  );
};

export default App;
