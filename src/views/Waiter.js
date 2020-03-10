import React from "react";
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

