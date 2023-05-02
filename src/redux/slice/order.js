const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  dataSeat: [],
  movieId: null,
  movieName: null,
  cinemaName: null,
  image: null,
  time: null,
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
        cinemaName: action.payload.cinemaName,
        image: action.payload.image
      };
    },
    addDataBookNow: (prevState, action) => {
      return {
        ...prevState,
        cinemaName: action.payload.cinemaName,
        image: action.payload.image,
        time: action.payload.time
      };
    },
    addSeats: (prevState, action) => {
      // Cek apakah seat sudah ada pada array onSelected
      const index = prevState.dataSeat.indexOf(action.payload);
      if (index !== -1) {
        // Jika sudah ada, hapus data pada indeks tersebut dari array
        const newSelected = [...prevState.dataSeat];
        newSelected.splice(index, 1);
        return { ...prevState, dataSeat: newSelected };
      } else {
        // Jika belum ada, tambahkan seat ke array
        const newSelected = [...prevState.dataSeat, action.payload];
        return { ...prevState, dataSeat: newSelected };
      }
    },
    addOrder: (prevState, action) => {
      return {
        ...prevState,
        // dataSeat: action.payload.dataSeats,
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
