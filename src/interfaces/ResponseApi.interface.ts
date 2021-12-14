import { NotificationInterface } from '@/interfaces/Notification.interface';
export interface ResponseApi{
    response: any| null | undefined;
    notification: NotificationInterface | null | undefined;
  }