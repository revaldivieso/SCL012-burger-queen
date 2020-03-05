import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Menu } from './ShowMenu';

export const Waiter = () => {
    return (
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
        <Menu />
      </div>
            

    )

}