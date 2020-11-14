import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { CollectionOverview } from "../../components/collectionsOverview";
import { CollectionPage } from "../categoty";

export const ShopPage = () => {
  const match = useRouteMatch();
  return (
    <div className={"shop-page"}>
      <Route exact path={`${match.path}`}>
        <CollectionOverview />
      </Route>
      <Route path={`${match.path}/:categoryId`}>
        <CollectionPage />
      </Route>
    </div>
  );
};
