import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import './sidebar.css';
import menu from './data.json'
console.log(menu);

function SideBar() {
    return (
      <div className="Sidebar">
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
    );
  }
  export default SideBar;

  class NavBar extends Component{
    render () {
      return (
        <div className="navbar">

          <nav className="navbar-dark">
           <a href="" className="text-white">
              Hola
           </a>
          </nav>
        </div>
      );
    }
  }
  export default NavBar;
