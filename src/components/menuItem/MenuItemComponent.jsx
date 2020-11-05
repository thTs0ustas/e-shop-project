import React from "react";
import "./MenuItemComponent.scss";
import {useHistory, useRouteMatch} from 'react-router-dom'

export const MenuItem = ({title, imgUrl, size, linkUrl}) => {
   const match = useRouteMatch()
   const history = useHistory()
   return (
      <div className={` ${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
         <div className={'background-image'} style={{backgroundImage: `url(${imgUrl})`}}>
         </div>
         <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
         </div>
      </div>
   );
};
