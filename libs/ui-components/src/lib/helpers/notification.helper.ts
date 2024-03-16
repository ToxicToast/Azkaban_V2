type NotificationItem = {
  event: string;
  id: string;
  title: string;
  created_at: Date;
};

export function NotificationHelper(data: Array<NotificationItem>) {
  return data.map((notification: NotificationItem) => {
    return {
      id: notification.id,
      title: setNotificationTitle(notification.event),
      description: notification.title,
      date: notification.created_at.toString(),
    };
  });
}

function setNotificationTitle(event: string): string {
  switch (event) {
    case 'inventory-category-created':
      return `New Inventory Category Created:`;
    default:
      return 'New Notification:';
  }
}
