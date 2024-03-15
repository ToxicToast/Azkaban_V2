import { RootState } from '../store';
import { createDraftSafeSelector } from '@reduxjs/toolkit';
const selectNotification = (state: RootState) => state.notification;

export const selectNotificationData = createDraftSafeSelector(
  selectNotification,
  (notification) => notification.data,
);
