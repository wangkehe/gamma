import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MerchantInformationComponent} from './merchant.information.component';
import {MerchantViewComponent} from './merchant.view.component';
import {MerchantQueryComponent} from './merchant.query.component';

const routes: Routes = [
  { path: '', component: MerchantInformationComponent  },
  { path: 'view', component: MerchantViewComponent },
  { path: 'info', component: MerchantInformationComponent },
  { path: 'query', component: MerchantQueryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
