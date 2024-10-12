import { createSlice } from '@reduxjs/toolkit';

export const paginationTerm = createSlice({
  name: 'pagination',
  initialState: 1,
  reducers: {
    updatePagination: (state, action) => {
      return action.payload;
    },
  },
});

export const { updatePagination } = paginationTerm.actions;

export default paginationTerm.reducer;
