// see https://redux-toolkit.js.org/tutorials/typescript#define-slice-state-and-action-types
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import produce from "immer";

type Id = number;

// Define the initial state using that type
const initialState = {
  activeLevel: 1,
  levels: [1,2,3]
};

export const renderModelSlice = createSlice({
  name: "rendermodel",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setActiveLevel: (state, payload: PayloadAction<Id>) => {
      state.activeLevel = payload.payload 
    },
  },
});

export const { setActiveLevel } =
  renderModelSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default renderModelSlice.reducer;
