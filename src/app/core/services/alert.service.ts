import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {NotificationAlert} from '../components/notification-alert/notification-alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private readonly alerts: Subject<NotificationAlert>;
  private readonly alerts$: Observable<NotificationAlert>;

  constructor() {
    this.alerts = new Subject<any>();
    this.alerts$ = this.alerts.asObservable();
  }

  emitAlert(message: string): void {
    this.alerts.next({message});
  }

  getAlerts$(): Observable<NotificationAlert> {
    return this.alerts$;
  }
}
