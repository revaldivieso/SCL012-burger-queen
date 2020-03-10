import React from "react";
import Layout from "../components/layout";
import Order from "../components/Order";
import ContainerMenu from "../components/ContainerMenu";
import SideBar from "../components/sidebar";

export const Waiter = () => {
  const [car, setCar] = React.useState([]);
  const onPurcharse = (item) => {
    const newCar = [...car];
    newCar.push(item);
    setCar(newCar)
  }
  return (
    <Layout>
        <SideBar />
        <ContainerMenu onPurcharse={onPurcharse} />
        <Order car={car} />
    </Layout>
  );
};

