import React from "react";
//import { Button } from "react-bootstrap";
//import { Link } from "react-router-dom";
import Layout from "../components/layout";
import Order from "../components/order";
import ContainerMenu from "../components/ContainerMenu";
import SideBar from "../components/sidebar";


export const Waiter = () => {
  return (

    <Layout>
        <SideBar />
        <ContainerMenu />
        <Order />
    </Layout>
  );
};

