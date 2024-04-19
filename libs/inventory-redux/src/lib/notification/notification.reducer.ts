import { PayloadAction } from '@reduxjs/toolkit';
import { NotificationModel } from './notification.model';
import { Notification } from './notification.interface';

export function setAddNotificationAction(
  state: NotificationModel,
  action: PayloadAction<Notification>,
) {
  state.data.push(action.payload);
}

export function setRemoveNotificationAction(
  state: NotificationModel,
  action: PayloadAction<string>,
) {
  const filteredData = state.data.filter((item) => item.id !== action.payload);
  state.data = filteredData;
}
