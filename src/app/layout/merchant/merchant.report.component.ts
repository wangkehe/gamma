import {Component} from '@angular/core';
import {addDays, addMonths, endOfMonth, format, startOfMonth} from 'date-fns';
import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd/i18n';
import {CandyDate} from 'ng-zorro-antd';
import {MerchantService} from './merchant.service';
import {SimpleDataGrid} from '../../shard/SimpleDataGrid/simpleDataGrid';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-merchant-report',
  templateUrl: './merchant.report.component.html',
  styleUrls: ['./merchant.report.component.css']
})

export class MerchantReportComponent {
  dateRangeType: number;
  dateValue: Date;
  reportTable: SimpleDataGrid<BankReport>;

  ranges1 = { '上月': [addMonths(startOfMonth(new Date()), -1), addDays(startOfMonth(new Date()), -1)],
    '本月': [startOfMonth(new Date()), endOfMonth(new Date())] };
  private queryCode: string | Int32Array;

  constructor(private merchantService: MerchantService) {
    this.dateRangeType = 1;
    this.reportTable = new SimpleDataGrid<BankReport>([]);
    // this.dateMonth = new Date();
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
    this.dateValue = result;
  }

  queryReport() {
    let startDate: string;
    let endDate: string;
    if (this.dateValue instanceof Array) { // 为数组时则是日期范围
      startDate = format(this.dateValue[0], 'yyyyMMdd');
      endDate = format(this.dateValue[1], 'yyyyMMdd');
    } else {
      startDate = format( startOfMonth(this.dateValue), 'yyyyMMdd');
      endDate = format( endOfMonth(this.dateValue), 'yyyyMMdd');
    }
    this.merchantService
      .queryBankReport(startDate, endDate)
      .subscribe(
        results => {
          console.log(results);
          this.queryCode = Md5.hashStr(new Date().toString());
          console.log(this.queryCode);
          this.reportTable = results.datas.小微;
          console.log(this.reportTable);
        }
      );
    // console.log(this.microBankReport);
  }

  changDateRangeType() {
    this.dateRangeType = this.dateRangeType === 1 ? 2 : 1;
  }
}

export class BankReport {
  mchtOrgId: string;
  mchtOrgName: string;
  numberOfMerchant: number;
  numberOfActiveMerchant: number;
  activeRate: number;
  totalTranCount: number;
  totalSumTxnAmt: number;
  statTxnCount1: number;
  statSumTxnAmt1: number;
  statTxnCount2: number;
  statSumTxnAmt2: number;
  statTxnCount3: number;
  statSumTxnAmt3: number;
  statTxnCount4: number;
  statSumTxnAmt4: number;
  statTxnCount5: number;
  statSumTxnAmt5: number;
}
