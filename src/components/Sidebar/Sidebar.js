import React from 'react';
import './style.css';
import Thumbnail from '../Thumbnail/Thumbnail';

const Sidebar = (props) => {
    return (<div className="sidebar">
        <Thumbnail 
            title="mea_louise" 
            description="Emma"
            img="https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-19/s150x150/43913090_191135048473787_8258812009550708736_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_ohc=W6ichF5La4IAX94zofD&oh=bb96c7b8d7676c55639251bdc999795b&oe=5EFA08DE"
        />
    </div>)
};

export default Sidebar;