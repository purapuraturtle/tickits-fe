import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./users";

const reducers = combineReducers({
  user: userSlice,
});

export default reducers;
