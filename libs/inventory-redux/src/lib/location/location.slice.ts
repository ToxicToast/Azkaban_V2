import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { locationState } from './location.state';
import { LocationModel } from './location.model';
import { onFullfiled, onPending, onRejected } from './location.extraReducer';

export const locationSlice = createSlice({
  name: 'location',
  initialState: locationState,
  reducers: {
    // NO REDUCERS
  },
  extraReducers: (builder: ActionReducerMapBuilder<LocationModel>) => {
    onPending(builder);
    onFullfiled(builder);
    onRejected(builder);
  },
});

export const {
  // NO ACTIONS
} = locationSlice.actions;

export default locationSlice.reducer;
