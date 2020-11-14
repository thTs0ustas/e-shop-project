import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

export const selectShopDirectory = (state) => state.shop;

export const selectShopDirectorySection = createSelector(
  [selectShopDirectory],
  (shop) => Object.keys(shop).map((key) => shop[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopDirectory], (items) => items[collectionUrlParam]);
