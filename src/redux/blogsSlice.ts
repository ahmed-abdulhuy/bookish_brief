import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export interface FilterState {
  filter: string 
}

const initialState: FilterState = {
  filter: ''
}

// fetch function

export const blogsApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
     
  }),

  endpoints(builder) {
    return {
      fetchBlogs: builder.query<IBlog[], number|void>({
        query(limit = 10){
          return `/blogs?limit=${limit}`;
        },
      }),
    };
  },
});


//=============


export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    get_all: (state) => {
      state.filter = '';
    },
    add_filter: (state, action:string) => {
        state.filter += ` ${action}`;
    },
  },
});


interface IBlog {
    id: number
    blog: string
}

// Action creators are generated for each case reducer function
export const { get_all, filter_web_dev } = filterSlice.actions

export default filterSlice.reducer

export const { useFetchBlogsQuery } = blogsApi;