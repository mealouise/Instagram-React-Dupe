import React from 'react';
import './style.css';
import Thumbnail from '../Thumbnail/Thumbnail';

const profileDetails = {
    name:"Emma",
    description: "username",
    img:"https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-19/s150x150/43913090_191135048473787_8258812009550708736_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_ohc=W6ichF5La4IAX94zofD&oh=bb96c7b8d7676c55639251bdc999795b&oe=5EFA08DE"

};

const Sidebar = (props) => {
    return (<div className="sidebar">
        <Thumbnail 
            title={profileDetails.name} 
            description={profileDetails.description}
            img={profileDetails.img}
        />
    </div>)
};

export default Sidebar;