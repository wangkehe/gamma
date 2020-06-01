import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import {ImpSchListComponent} from './impSchList.component';
import {ManualImpComponent} from './manualImp.component';
import {FtpDataComponent} from './ftpData.component';

const routes: Routes = [
  { path: '', component: ImpSchListComponent},
  { path: 'ftpData', component: FtpDataComponent},
  { path: 'imp', component: ManualImpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataManageRoutingModule {}
