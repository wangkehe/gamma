import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NzButtonModule, NzCardModule, NzInputModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {NgxEchartsModule} from 'ngx-echarts';
import {MerchantInformationComponent} from './merchant.information.component';
import {MerchantRoutingModule} from './merchant-routing.module';
import {MerchantService, MerchantView} from './merchant.service';
import {MerchantViewComponent} from './merchant.view.component';
import {BrowserModule} from '@angular/platform-browser';
import {MerchantQueryComponent} from './merchant.query.component';

@NgModule({
  declarations: [ MerchantInformationComponent, MerchantViewComponent, MerchantQueryComponent ],
  imports: [
    CommonModule, HttpClientModule, NzCardModule, MerchantRoutingModule,
    FormsModule, NzInputModule, NzButtonModule, NgZorroAntdModule, NgxEchartsModule
  ],
  providers: [ MerchantService ]
})
export class MerchantModule { }
