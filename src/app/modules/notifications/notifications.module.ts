import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './views/notifications/notifications.component';
import { NotificationItemComponent } from './views/notification-item/notification-item.component';



@NgModule({
  declarations: [NotificationsComponent, NotificationItemComponent],
  imports: [
    CommonModule
  ]
})
export class NotificationsModule { }
