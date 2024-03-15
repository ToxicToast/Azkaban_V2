import { createSlice } from '@reduxjs/toolkit';
import { notificationState } from './notification.state';
import {
  setAddNotificationAction,
  setRemoveNotificationAction,
} from './notification.reducer';

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: notificationState,
  reducers: {
    setAddNotification: setAddNotificationAction,
    setRemoveNotification: setRemoveNotificationAction,
  },
});

export const { setAddNotification, setRemoveNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
