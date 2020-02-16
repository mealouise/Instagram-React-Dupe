import React from 'react';
import './style.css';
import Thumbnail from '../Thumbnail/Thumbnail';
import Panel from '../Panel/Panel';

const profileDetails = {
    name:"Emma",
    description: "username",
    img:"https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-19/s150x150/43913090_191135048473787_8258812009550708736_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_ohc=W6ichF5La4IAX94zofD&oh=bb96c7b8d7676c55639251bdc999795b&oe=5EFA08DE"
};

const stories = [
    {
        title: 'At Universal Studios',
        posted: '53 minute ago',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ush-globe-arch-1556056452.jpg?crop=1.00xw:0.752xh;0,0.145xh&resize=480:*'
    },
    {
        title: 'Ebay Sales',
        posted: '1 hour ago',
        img: 'https://media.glassdoor.com/sqll/7853/ebay-squarelogo-1535144327296.png'
    },
    {
        title: 'Harry Potter Studios!',
        posted: '3 hours ago',
        img: 'https://cdn2.veltra.com/ptr/20160830001034_850809216_2074_0.jpg?imwidth=550&impolicy=custom'
    }
];

const Sidebar = (props) => {
    return (<div className="sidebar">
        <Thumbnail 
            title={profileDetails.name} 
            description={profileDetails.description}
            img={profileDetails.img}
        />
        <Panel 
            title="Stories"
            actions="Watch All"
        >
            {
                stories.map((story) => {
                    return (<Thumbnail 
                        title={story.title} 
                        description={story.posted}
                        img={story.img}
                    />)
                })
            }
           
        </Panel>
    </div>)
};

export default Sidebar;