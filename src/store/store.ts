import { configureStore } from "@reduxjs/toolkit";
// see https://redux-toolkit.js.org/tutorials/typescript#define-root-state-and-dispatch-types
import renderModelSliceReducer from "./renderModelSlice";
// ...

export const store = configureStore({
  reducer: {
    renderModel: renderModelSliceReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
