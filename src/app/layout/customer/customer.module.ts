/**
 * Created by WKH on 2018-1-24.
 */
import { NgModule } from '@angular/core';

import { CustomerRoutingModule } from './customer-routing.module';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {CustomerViewService} from './customer.view.service';
import {CustomerViewComponent} from './customer.view.component';
import {NgZorroAntdModule, NzButtonModule, NzCardModule, NzInputModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {NgxEchartsModule} from 'ngx-echarts';
import {CustomerInformationComponent} from './customer.information.component';

@NgModule({
  declarations: [
    CustomerViewComponent, CustomerInformationComponent
  ],
  imports: [
    CommonModule, HttpClientModule, CustomerRoutingModule, NzCardModule,
    FormsModule, NzInputModule, NzButtonModule, NgZorroAntdModule, NgxEchartsModule
  ],
  providers: [ CustomerViewService ]
})
export class CustomerModule { }
