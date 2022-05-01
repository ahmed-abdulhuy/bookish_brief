import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filterSlice'
import { blogsApi } from './blogsAPI'


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [blogsApi.reducerPath]: blogsApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(blogsApi.middleware);
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch