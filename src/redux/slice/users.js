import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { login } from "@/utils/https/authaxios";

const initialState = {
  data: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
  err: null,
};

const storeLogin = createAsyncThunk(
  "users/post",
  async ({ email, password }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await login(email, password);
      const { data } = response;
      return fulfillWithValue(data);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (prevState) => {
      return {
        ...prevState,
        data: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(storeLogin.pending, (prevState) => {
        return {
          ...prevState,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
        };
      })
      .addCase(storeLogin.fulfilled, (prevState, action) => {
        return {
          ...prevState,
          isLoading: false,
          isFulfilled: true,
          data: action.payload,
        };
      })
      .addCase(storeLogin.rejected, (prevState, action) => {
        return {
          ...prevState,
          isLoading: false,
          isRejected: true,
          err: action.payload,
        };
      });
  },
});

export const usersAction = {
  ...userSlice.actions,
  storeLogin,
};
export default userSlice.reducer;
2;
