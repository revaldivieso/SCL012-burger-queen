import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Kitchen = () => {
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
        <h2>Cocina</h2>
      </div>
            

    )

}