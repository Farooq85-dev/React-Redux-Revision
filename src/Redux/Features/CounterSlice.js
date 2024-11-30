import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counterValue: 0,
  },
  reducers: {
    increment: (state) => {
      if (state.counterValue === 10)
        return alert("Counter must between 0 to 10");
      state.counterValue = state.counterValue + 1;
    },
    decrement: (state) => {
      if (state.counterValue === 0) return alert("Please Increment Value!");
      state.counterValue = state.counterValue - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
