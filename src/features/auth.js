import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: { sessionId: null },
  reducers: {
    setSessionId(state, action) {
      state.sessionId = action.payload;
    },
  },
});

export const { setSessionId } = authSlice.actions;

export default authSlice.reducer;
