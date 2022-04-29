import { createSlice } from '@reduxjs/toolkit'

export interface BlogState {
  blogs: IBlog[]
}

const initialState: BlogState = {
  blogs: [{
      id: 0,
      blog: '',
  }],
}

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    get_all: (state) => {
      state.blogs = [{id:1, blog:'ahmed'}];
    },
    filter_web_dev: (state) => {
        state.blogs = [{id:1, blog:'Wafa'}];
    },
  },
})


interface IBlog {
    id: number
    blog: string
}

// Action creators are generated for each case reducer function
export const { get_all, filter_web_dev } = blogSlice.actions

export default blogSlice.reducer