import { configureStore, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => (state = state + 1),
    decrement: (state) => (state = state - 1),
  },
});

export const store = configureStore(counterSlice);
export const { increment, decrement } = counterSlice.actions;
