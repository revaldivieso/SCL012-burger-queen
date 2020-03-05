import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import './sidebar.css';


const SideBar = () => {
    return (
      <div className="sidebar">
        <div className="sidebar-content">
        <header>Menú</header>
        <ButtonGroup className="SideButtons" vertical>
           <Button>Hamburguesas</Button>
           <Button>Agregados</Button>
           <Button>Compartir</Button>
          <DropdownButton as={ButtonGroup} title="tragos" id="bg-vertical-dropdown-1">
             <Dropdown.Item eventKey="1">Temáticos</Dropdown.Item>
             <Dropdown.Item eventKey="2">Cocktails</Dropdown.Item>
             <Dropdown.Item eventKey="3">Cervezas</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
        </div>
      </div> 
    );
  }
  export default SideBar;
