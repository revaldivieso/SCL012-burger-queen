import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Layout from "../components/layout";
import MenuData from "../components/menu";
import Order from "../components/order";

export const Waiter = () => {
    return (
      <Layout>
        <div>
        <nav>
          <ul>
              <Link to='/'>
                <Button>
                  Home
                </Button>
              </Link>
          </ul>
        </nav>
        <h2>Pedidos</h2>

      </div>
      <MenuData />
      <Order />
      </Layout>   

    )

}