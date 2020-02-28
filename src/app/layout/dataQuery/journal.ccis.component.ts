/**
 * Created by WKH on 2018-1-30.
 */
import { Component, OnInit, Input } from '@angular/core';
import { DownloadService } from '../../core/downloadService';
import { HttpParams } from '@angular/common/http';
import { SimpleDataGrid } from '../../shard/SimpleDataGrid/simpleDataGrid';
import { JournalCCIS, JournalService } from './journal.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-journal-ccis',
  templateUrl: './journal.ccis.component.html',
  styleUrls: ['./journal.ccis.component.css']
})

export class JournalCCISComponent implements OnInit {
  account = new FormControl('');
  table: SimpleDataGrid<JournalCCIS>;
  data: JournalCCIS[];
  isSearch: boolean;
  isExport: boolean;
  errorMessage = '';
  selectAccount: string;
  // isDialogOpen: boolean;
  queryAccounts = new Set();
  isVisible: any;
  inputValue: any;
  isConfirmLoading: any;
  validateForm: FormGroup;
  inputSearchValue: any;

  constructor(private fb: FormBuilder, private journalService: JournalService, private downloadService: DownloadService) {
    this.table = new SimpleDataGrid<JournalCCIS>([]);
    this.isSearch = true;
    console.log(this.table.currentPageIndex);
  }

  ngOnInit(): void {
    this.validateForm = new FormGroup({
      account: new FormControl()
    });
    // this.validateForm = this.fb.group({
    //   account: [null, [Validators.required]]
    // });
  }

  searchFilter(name: string): void {
    console.log(name);
  }

  getTr32Datas(queryAccount): void {
    this.journalService
      .getJournalRecord(queryAccount)
      .subscribe(results => {
        this.table.items = results.datas;
        this.data = results.datas;
        this.isExport = true;
      });
  }

  reset(): void {
    this.validateForm.reset();
    this.selectAccount = null;
    this.table = new SimpleDataGrid<JournalCCIS>([]);
    this.data = [];
    this.isExport = false;
    this.queryAccounts = new Set();
  }

  addAccount(account): void {
    // console.log(this.validateForm.get('account').value);
    const queryAccountValues = this.validateForm.get('account').value;
    console.log(queryAccountValues);
    if (queryAccountValues != null && queryAccountValues !== '') {
      const accounts = queryAccountValues.split('\n');
      if (this.queryAccounts.size === 0 ) {
        this.selectAccount = accounts[0];
        this.getTr32Datas(this.selectAccount);
      }
      for (const acc of accounts) {
        this.queryAccounts.add(acc);
      }
    }
    this.handleOk();
  }

  onQuery(account): void {
    this.queryAccounts = account.split('\n');
    this.getTr32Datas(this.queryAccounts[0]);
  }

  changeAccount(selectAccount: string): void {
    console.log(selectAccount);
    this.selectAccount = selectAccount;
    this.table.items = [];
    this.getTr32Datas(this.selectAccount);
  }

  exportExcel(account): void {
    this.journalService.export(account)
      .subscribe(value => {
        const filename = this.getCurFormatDate() + '.xlsx';
        const params = new HttpParams().set('filename', value.file);
        this.downloadService
          .export('api/download', filename, params);
      });
  }

  exportAll(): void {

    if (this.queryAccounts.size > 0) {
      const accounts = Array.from(this.queryAccounts).toString();
      this.journalService.exportAll(accounts)
        .subscribe(value => {
          const filename = this.getCurFormatDate() + '.xlsx';
          const params = new HttpParams().set('filename', value.file);
          this.downloadService
            .export('api/download', filename, params);
        });
    }
  }

  getCurFormatDate(): string {
    const date = new Date();
    let sMonth = '0' + (date.getMonth() + 1);
    sMonth = sMonth.substr(sMonth.length - 2, sMonth.length);
    let sDate = '0' + date.getDate();
    sDate = sDate.substr(sDate.length - 2, sDate.length);
    let sHour = '0' + date.getHours();
    sHour = sHour.substr(sHour.length - 2, sHour.length);
    let sMinutes = '0' + date.getMinutes();
    sMinutes = sMinutes.substr(sMinutes.length - 2, sMinutes.length);
    let sSeconds = '0' + date.getSeconds();
    sSeconds = sSeconds.substr(sSeconds.length - 2, sSeconds.length);
    return date.getFullYear() + sMonth + sDate + sHour + sMinutes + sSeconds;
  }

  handleCancel() {
    this.isVisible = false;
  }

  handleOk() {
    this.isVisible = false;
  }

  showModal() {
    this.isVisible = true;
  }

  resetForm(e: MouseEvent) {
    e.preventDefault();
    // document.getElementById('account').value = '';
    this.validateForm.reset();
    // for (const key in this.validateForm.controls) {
    //   this.validateForm.controls[key].markAsPristine();
    //   this.validateForm.controls[key].updateValueAndValidity();
    // }
  }
}



