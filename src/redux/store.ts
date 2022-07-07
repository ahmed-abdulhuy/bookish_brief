import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filterSlice'
import { BooksApi } from './booksAPI'


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [BooksApi.reducerPath]: BooksApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(BooksApi.middleware);
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch