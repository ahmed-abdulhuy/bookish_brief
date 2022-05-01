import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface FilterState {
  filter: string 
}

const initialState: FilterState = {
  filter: ''
}


export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    get_all: (state) => {
      state.filter = '';
    },
    add_filter: (state, action: PayloadAction<string>) => {
      console.log('action:', action)
        state.filter += `|${action.payload}`;
    },
    remove_filter: (state, action: PayloadAction<string>) => {
      state.filter.replace(` ${action}`, '') ;
    }
  },
});


// Action creators are generated for each case reducer function
export const { get_all, add_filter } = filterSlice.actions

export default filterSlice.reducer
