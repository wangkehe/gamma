import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/mcht/view' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'customer', loadChildren: () => import('./layout/customer/customer.module').then(m => m.CustomerModule) },
  { path: 'dm', loadChildren: () => import('./layout/dataManage/dataManage.module').then(m => m.DataManageModule) },
  { path: 'query', loadChildren: () => import('./layout/dataQuery/dataQuery.module').then(m => m.DataQueryModule) },
  { path: 'mcht', loadChildren: () => import('./layout/merchant/merchant.module').then(m => m.MerchantModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
