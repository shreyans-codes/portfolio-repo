import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import navbarReducer from "./navbarSlice";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistAuthConfig = {
  key: "auth",
  storage,
};
const persistNavbarConfig = {
  key: "navbar",
  storage,
};

const persistedNavbarReducer = persistReducer(
  persistNavbarConfig,
  navbarReducer
);

export const store = configureStore({
  reducer: {
    navbar: persistedNavbarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

export const persistor = persistStore(store);
