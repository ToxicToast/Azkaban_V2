import { Subject } from 'rxjs';
import { Optional } from '@azkaban/shared';

export type Toasts = {
  id: string;
  type: 'success' | 'danger' | 'warning' | 'info' | 'default';
  title?: Optional<string>;
  text: string;
};

class ToastService {
  private notificationSubject = new Subject<Toasts>();

  public sendToast(notification: Omit<Toasts, 'id'>) {
    const id = `${Date.now()}-${Math.random()}`; // good enough as id for local notifications
    this.notificationSubject.next({ ...notification, id });
  }

  public getToastObservable() {
    return this.notificationSubject.asObservable();
  }
}

export const toastService = new ToastService();
