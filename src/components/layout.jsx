import React from 'react';
import SideBar from "./sidebar";
import "./layout.css"

const Layout = (props) => (<div className="layout">
    <SideBar />
    <div className="content">
        {props.children}
    </div>
</div>)

export default Layout;