import React from "react";

import "./CollectionsOverview.scss";

import { useSelector } from "react-redux";
import { selectShopDirectorySection } from "../../redux/shopDirectory/shopDirectorySelectors";
import { CollectionPreview } from "../PreviewCollection";

export const CollectionOverview = () => {
  const collections = useSelector((state) => selectShopDirectorySection(state));

  return (
    <div className={"collection-overview"}>
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};
