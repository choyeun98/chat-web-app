import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import profileReducer from "./features/profileListSlice/profileListSlice";
import toggleViewReducer from "./features/ToggleButton/toggleButtonSlice";

const rootReducer = combineReducers({
  profile: profileReducer,
  toggleView: toggleViewReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

export default store;
