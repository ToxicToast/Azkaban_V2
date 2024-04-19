import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { authState } from './auth.state';
import { setLogoutAction, setUserAction } from './auth.reducer';
import { AuthModel } from './auth.model';
import { onFullfiled } from './auth.extraReducer';
import { onPending } from './auth.extraReducer';

export const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    setUser: setUserAction,
    setLogout: setLogoutAction,
  },
  extraReducers: (builder: ActionReducerMapBuilder<AuthModel>) => {
    onPending(builder);
    onFullfiled(builder);
    // onRejected(builder);
  },
});

export const { setUser, setLogout } = authSlice.actions;
export default authSlice.reducer;
