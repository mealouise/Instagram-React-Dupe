import React from 'react';
import './style.css';


const Panel = (props) => {
    return (<div className="panel">
        <div className="panel__header">
            <h2 className="panel__title">{props.title}</h2>
            <div className="panel__actions">{props.actions}</div>
        </div>
        <div className="panel__children">{props.children}</div>
    </div>)
};

export default Panel;