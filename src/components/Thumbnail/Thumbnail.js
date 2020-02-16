import React from 'react';
import './style.css';

const Thumbnail = (props) => {
    return (<article className="thumbnail">
        <img className="thumbnail__img" src={props.img}/>
        <div className="thumbnail__details">
            <h2 className="thumbnail__title">{props.title}</h2>
            <p className="thumbnail__description">{props.description}</p>
        </div>
        
    </article>)
};

export default Thumbnail;