import { AppDispatch, useAppSelector } from '../store';
import { selectNotificationData } from './notification.selector';
import { Notification } from './notification.interface';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  setAddNotification,
  setRemoveNotification,
} from './notification.slice';

export function useNotificationState() {
  const dispatch = useDispatch<AppDispatch>();
  const notificationData = useAppSelector(selectNotificationData);

  const addNotification = useCallback((notification: Notification) => {
    dispatch(setAddNotification(notification));
  }, []);

  const removeNotification = useCallback((id: string) => {
    dispatch(setRemoveNotification(id));
  }, []);

  return {
    notificationData,
    addNotification,
    removeNotification,
  };
}
