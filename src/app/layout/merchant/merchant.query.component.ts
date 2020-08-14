import {Component} from '@angular/core';
import {MerchantService, MerchantView} from './merchant.service';
import {SimpleDataGrid} from '../../shard/SimpleDataGrid/simpleDataGrid';
import {MerchantInfoDetail} from './merchant.information.component';
import {MerchantBaseInfo} from './merchant.model';

@Component({
  selector: 'app-merchant-query',
  templateUrl: './merchant.query.component.html'
})

export class MerchantQueryComponent {
  baseInfoList: MerchantBaseInfo[];
  searchValue: any;

  constructor(private merchantService: MerchantService) {
    this.baseInfoList = new Array<MerchantBaseInfo>();
  }
  queryMchtBaseInfo(searchValue: string) {
    this.merchantService
      .queryMerchantBaseInfo(searchValue)
      .subscribe(results => {
        this.baseInfoList = results.datas;
      });
  }
}
