import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {CoreRoutingModule} from './core-routing.module';
import { NotificationAlertComponent } from './components/notification-alert/notification-alert.component';



@NgModule({
  declarations: [HeaderComponent, NotificationAlertComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
    exports: [
        CoreRoutingModule,
        HeaderComponent,
        NotificationAlertComponent
    ]
})
export class CoreModule { }
