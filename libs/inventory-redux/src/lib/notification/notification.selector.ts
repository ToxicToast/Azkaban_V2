import { RootState } from '../store';
import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { NotificationModel } from './notification.model';
const selectNotification = (state: RootState) => state.notification;

export const selectNotificationData = createDraftSafeSelector(
  selectNotification,
  (notification: NotificationModel) => notification.data,
);
