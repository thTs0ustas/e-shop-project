import React, {useState} from "react";
import SHOP_DATA from "./SHOP_DATA";
import {CollectionPreview} from "../../components";

export const ShopPage = () => {
   const [collections/*, setCollections*/] = useState(SHOP_DATA)

   return (
      <div className={'shop-page'}>
         {collections.map(({id, ...otherPreviewProps}) =>
               (<CollectionPreview key={id} {...otherPreviewProps}
               />))}
      </div>)

}

