import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import pointsSlice from "../slices/pointsSlice";
// import userSlice from "../slices/userSlice";

const rootReducer = combineReducers({
  points: pointsSlice,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["points"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
