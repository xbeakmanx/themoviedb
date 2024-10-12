import { createSlice } from '@reduxjs/toolkit';

export const searchTerm = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    updateSearch: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateSearch } = searchTerm.actions;

export default searchTerm.reducer;
