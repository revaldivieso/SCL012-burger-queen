import React, { Component } from 'react';
import './App.css';
import menu from './data.json';

export class Menu extends Component {
    constructor(){
      super();
      this.state = {
      menu
      }
    }
    
      render() {
       const showMenu = this.state.menu.map((menus, i) =>{
          return (
          <button className="btn-lg">{menus.name}</button>
            
          
          )
        })
        return (
            {showMenu}

        );
      }
    }

