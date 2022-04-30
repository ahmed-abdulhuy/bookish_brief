import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
// import blogsReducer from './blogsSlice'
import { blogsApi } from './blogsSlice'
export const store = configureStore({
  reducer: {
    // blogs: blogsReducer,
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