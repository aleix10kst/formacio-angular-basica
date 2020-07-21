import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/containers/home/home.component';
import {CheckoutComponent} from '../checkout/containers/checkout/checkout.component';
import {RoutePaths} from '../shared/constants/route-paths';

const routes: Routes = [
  {
    path: RoutePaths.Inici, component: HomeComponent
  },
  {
    path: RoutePaths.Checkout, component: CheckoutComponent
  },
  {
    path: RoutePaths.User, loadChildren: () => import('../user/user.module').then(m => m.UserModule)
  },
  {
    path: '', pathMatch: 'full', redirectTo: RoutePaths.Inici
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule { }
