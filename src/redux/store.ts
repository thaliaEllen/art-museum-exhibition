import { configureStore } from "@reduxjs/toolkit";

import sliceFavorites from "./sliceFavorites";

const store = configureStore({
  reducer: {
    favorites: sliceFavorites,
  },
});

export default store;
