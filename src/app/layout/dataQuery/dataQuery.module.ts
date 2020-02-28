/**
 * Created by WKH on 2018-1-29.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { JournalService } from './journal.service';
import { DownloadService } from '../../core/downloadService';
import {JournalCCISComponent} from './journal.ccis.component';
import {SimpleDataGridModule} from '../../shard/SimpleDataGrid/simpleDataGrid.module';
import {DataQueryRoutingModule} from './dataQuery-routing.module';
import {NgZorroAntdModule, NzCardModule} from 'ng-zorro-antd';

@NgModule({
  declarations: [
    JournalCCISComponent
  ],
  imports: [DataQueryRoutingModule, CommonModule, FormsModule, HttpClientModule,
    SimpleDataGridModule, NzCardModule, NgZorroAntdModule, ReactiveFormsModule],
  providers: [JournalService, DownloadService ]
})
export class DataQueryModule {}
