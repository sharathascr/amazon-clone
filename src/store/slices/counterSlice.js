import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0 };
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      return { ...state, counter: state.counter + 1 };
    },
    decrement(state) {
      return { ...state, counter: state.counter - 1 };
    },
  },
});

export const counterActions = counterSlice.actions;
