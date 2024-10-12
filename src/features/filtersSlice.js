import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: { genre: false, date: false, calification: false },
  reducers: {
    updateFilter: (state, action) => {
      const { type, value, nameGenre } = action.payload;
      if (type === 'genre') {
        state.genre = { id: value, nameGenre };
      }
      if (type === 'date') {
        state.date = value;
      }
      if (type === 'calification') {
        state.calification = value;
      }
      if (type === 'all') {
        state.genre = false;
        state.date = false;
        state.calification = false;
      }
    },

    removeFilter: (state, action) => {
      const { type } = action.payload;
      if (type === 'genre') {
        state.genre = false;
      }
      if (type === 'date') {
        state.date = false;
      }
      if (type === 'calification') {
        state.calification = false;
      }
    },
  },
});

export const { updateFilter, removeFilter } = filterSlice.actions;

export default filterSlice.reducer;
