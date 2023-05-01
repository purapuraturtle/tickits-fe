import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./users";
import orderSlice from "./order";

const reducers = combineReducers({
  user: userSlice,
  order: orderSlice,
});

export default reducers;
