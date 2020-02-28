import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import {JournalCCISComponent} from './journal.ccis.component';

const routes: Routes = [
  // { path: '',
    // component: JudiciaryComponent,
    // children: [
      { path: '', component: JournalCCISComponent},
      { path: 'ccis', component: JournalCCISComponent}
      // { path: 'account', component: AccountComponent},
      // { path: 'importgrbc', component: ImportGrbcComponent}
    // ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataQueryRoutingModule {}
