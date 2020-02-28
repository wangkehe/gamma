/**
 * Created by WKH on 2018-1-29.
 */
import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';

// import {InformationGatherComponent} from './informationGather.component';
import {CustomerViewComponent} from './customer.view.component';
import {CustomerInformationComponent} from './customer.information.component';
// import {CustomerRelationsComponent} from './customerRelations.component';

const routes: Routes = [
  { path: '', component: CustomerViewComponent  },
  { path: 'information', component: CustomerInformationComponent },
  { path: 'view', component: CustomerViewComponent}
  // { path: 'relations', component: CustomerRelationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
