import { createSlice } from '@reduxjs/toolkit';
import { authState } from './auth.state';
import { setUserAction } from './auth.reducer';

export const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    setUser: setUserAction,
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
