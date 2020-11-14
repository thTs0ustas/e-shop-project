import React from "react";
import { useRouteMatch } from "react-router-dom";
import "./collection.scss";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shopDirectory/shopDirectorySelectors";
import { CollectionItem } from "../../components/collectionItem";

export const CollectionPage = () => {
  const match = useRouteMatch();

  const collection = useSelector((state) =>
    selectCollection(match.params.categoryId)(state)
  );

  const { title, items } = collection;

  return (
    <div className={"collection-page"}>
      <h2 className="title">{title}</h2>
      <div className={"items"}>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
