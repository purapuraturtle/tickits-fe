const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  dataSeat: [],
  movieId: null,
  movieName: null,
  teathstudioId: null,
  totalPrice: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addMovieId: (prevState, action) => {
      return {
        ...prevState,
        movieId: action.payload.id,
        movieName: action.payload.name,
      };
    },
    addOrder: (prevState, action) => {
      return {
        ...prevState,
        dataSeat: action.payload.dataSeats,
        teathstudioId: action.payload.teathstudioId,
        totalPrice: action.payload.totalPrice,
      };
    },
    resetOrder: () => {
      return initialState;
    },
  },
});

export const orderAction = { ...orderSlice.actions };
export default orderSlice.reducer;
