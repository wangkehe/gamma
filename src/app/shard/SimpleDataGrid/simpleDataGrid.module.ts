import {NgModule} from '@angular/core';
import {PaginationComponent} from './pagination.component';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PaginationComponent
  ],
  exports: [
    CommonModule, PaginationComponent
  ]
})

export class SimpleDataGridModule {

}
