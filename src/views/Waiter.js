import React from "react";
import Layout from "../components/Layout";
import Order from "../components/Order";
import ContainerMenu from "../components/ContainerMenu";
import SideBar from "../components/Sidebar";

export const Waiter = () => {
  const [car, setCar] = React.useState([]);
  const onPurcharse = item => {
    const newCar = [...car];
    newCar.push(item);
    setCar(newCar);
  };
  const removeItem = (item, i) => {
    const newCar = [...car];
    newCar.splice(i, 1);
    setCar(newCar);
  }
  
  return (
    <Layout>
      <SideBar />
      <ContainerMenu onPurcharse={onPurcharse} />
      <Order car={car} removeItem={removeItem} />
    </Layout>
  );
};
