import React from 'react';
import './style.css';

const Layout = (props) => {
    return (<div className="layout">
        <header className="layout__header">{props.header}</header>
        <main className="layout__main"> 
            <div>{props.children}</div>
            <aside className="layout__sidebar">
                {props.sideBar}
            </aside>
        </main>
    </div>)
};

export default Layout;