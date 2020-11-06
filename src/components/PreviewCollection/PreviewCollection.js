import React from "react";
import {CollectionItem} from "../collectionItem";
import './PreviewCollection.scss'

export const CollectionPreview = ({...props}) => (

   <div className={'collection-preview'}>
      <h1 className={'title'}>{props.title.toUpperCase()}</h1>
      <div className={'preview'}>
         {props.items
            .filter((item, idx) => idx < 4)
            .map(({id, ...otherProps}) =>
               (<CollectionItem key={id} {...otherProps}/>))
         }
      </div>
   </div>
)