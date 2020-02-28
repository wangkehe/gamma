/**
 * Created by WKH on 2018-1-24.
 */
import { NgModule } from '@angular/core';

import {DataManageRoutingModule} from './dataManage-routing.module';
import {ImpSchListComponent} from './impSchList.component';
import {DataManageService} from './dataManage.service';
// import {DownloadService} from '../../core/downloadService';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// import {PaginationComponent} from '../../shared/SimpleDataGrid/pagination.component';
import {FileTypePipe} from './dataManage.pipe';
// import {SimpleDataGridModule} from '../../shared/SimpleDataGrid/simpleDataGrid.module';
import {ManualImpComponent} from './manualImp.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  declarations: [
    ImpSchListComponent, ManualImpComponent, FileTypePipe
  ],
  imports: [
    DataManageRoutingModule, CommonModule, FormsModule, HttpClientModule, NgZorroAntdModule, // , SimpleDataGridModule
  ],
  providers: [DataManageService /*DownloadService*/]
})

export class DataManageModule { }
