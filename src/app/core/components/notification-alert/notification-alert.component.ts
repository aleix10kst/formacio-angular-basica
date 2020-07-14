import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertService} from '../../services/alert.service';
import {Subject} from 'rxjs';

export interface NotificationAlert {
  message: string;
}

@Component({
  selector: 'app-notification-alert',
  templateUrl: './notification-alert.component.html',
  styleUrls: ['./notification-alert.component.css']
})
export class NotificationAlertComponent implements OnInit, OnDestroy {

  private unsubscribe$: Subject<void> = new Subject<void>();

  alert: NotificationAlert;

  constructor(private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.alertService.getAlerts$().subscribe((alert: NotificationAlert) => {
      this.alert = alert;
      setTimeout(() => this.alert = null, 3000);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
