import {Component} from '@angular/core';
import {SimpleDataGrid} from '../../shard/SimpleDataGrid/simpleDataGrid';
import {JournalCCIS} from '../dataQuery/journal.service';
import {MerchantView, MerchantService} from './merchant.service';
import {DcImpSch} from '../dataManage/impSchList.component';

@Component({
  selector: 'app-merchant-info',
  templateUrl: './merchant.information.component.html',
  styleUrls: ['./merchant.information.component.css']
})

export class MerchantInformationComponent {
  table: SimpleDataGrid<MerchantView>;
  selectBankCode: any;
  selectMchtProp: any;
  selectedRecord: MerchantView;
  filterValue: MerchantView;
  inputSearchValue: string;
  tabIndex: any;
  curIndex: number;
  qrImagePath = 'assets/qrcode/14377282-143600006100730140.png';

  constructor(private merchantService: MerchantService) {
    this.table = new SimpleDataGrid<MerchantView>([]);
    this.tabIndex = 0;
    this.queryMerchantView();
    this.selectedRecord = new MerchantView();
    this.filterValue = new MerchantView();
  }

  queryMerchantView() {
    this.merchantService
      .getMerchantViewList()
      .subscribe(results => {
        this.table.items = results.datas;
        this.curIndex = 0;
        this.selectedRecord = this.table.itemsFiltered[this.curIndex];
        // this.data = results.datas;
      });
  }

  sortMerchantView(order: string, orderType: string) {
    this.merchantService
      .sortMerchantView(order, orderType)
      .subscribe(results => {
        this.table.items = results.datas;
        this.selectedRecord = this.table.itemsFiltered[this.curIndex];
        this.curIndex = 0;
        // this.data = results.datas;
      });
  }

  changeBankCode(bankCode: string) {
    if (bankCode === '2430000') {
      this.filterValue.bankCode = '';
    } else {
      this.filterValue.bankCode = bankCode;
    }
    this.table.filterRecord = this.filterValue;
    this.selectRecord(this.table.itemsFiltered[0]);
  }

  changeMchtProp(mchtProp: any) {
    this.filterValue.mchtProp = mchtProp;
    this.table.filterRecord = this.filterValue;
    this.selectRecord(this.table.itemsFiltered[0]);
  }

  changeInputValue(inputSearchValue: any) {
    this.table.searchValue = inputSearchValue;
    this.selectRecord(this.table.itemsFiltered[0]);
    this.curIndex = 0;
  }

  sort(sort: { key: string; value: string }): void {
    const sortName = sort.key;
    const sortValue = sort.value;
    this.table.items = [];
    this.sortMerchantView(sortName, sortValue);
  }

  selectRecord(record: any) {
    if (typeof record === 'object') {
      this.selectedRecord = record;
    }
    if (typeof record === 'number') {
      this.curIndex = this.curIndex + record;
      this.curIndex = this.curIndex < 0 ? 0 : this.curIndex;
      this.selectedRecord = this.table.itemsFiltered[this.curIndex];
    }
  }

  showDetail(info: MerchantView) {
    this.selectedRecord = info;
    this.tabIndex = 1;
  }
}
