import React from "react";

import './collectionItem.scss'

export const CollectionItem = ({id, ...props}) => {
   return (
      <div className={'collection-item'}>
         <div className={'image'}
              style={{
                 backgroundImage: `url(${props.imageUrl})`
              }}/>
            <div className={'collection-footer'}>
               <span className={'name'}>{props.name}</span>
               <span className={'price'}>{props.price}</span>
            </div>
      </div>
   )
}

