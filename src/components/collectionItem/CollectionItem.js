import React from "react";

import "./collectionItem.scss";

import { useDispatch } from "react-redux";
import { CustomButton } from "../customButton";
import { addItem } from "../../redux/cart/cartAction";

export const CollectionItem = ({ item }) => {
  const newItemDispatch = useDispatch();

  return (
    <div className={"collection-item"}>
      <div
        className={"image"}
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      />
      <div className={"collection-footer"}>
        <span className={"name"}>{item.name}</span>
        <span className={"price"}>{item.price}</span>
      </div>
      <CustomButton onClick={() => newItemDispatch(addItem(item))} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};
