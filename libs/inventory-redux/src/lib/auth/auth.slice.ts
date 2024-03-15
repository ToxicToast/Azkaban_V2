import { createSlice } from '@reduxjs/toolkit';
import { authState } from './auth.state';
import { setLogoutAction, setUserAction } from './auth.reducer';

export const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    setUser: setUserAction,
    setLogout: setLogoutAction,
  },
});

export const { setUser, setLogout } = authSlice.actions;
export default authSlice.reducer;
