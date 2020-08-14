/**
 * Created by WKH on 2018-3-16.
 */
import { Component, OnInit } from '@angular/core';
// import {SimpleDataGrid} from '../../shared/SimpleDataGrid/simpleDataGrid';
import {DataManageService} from './dataManage.service';
import {SimpleDataGrid} from '../../shard/SimpleDataGrid/simpleDataGrid';
import {addDays, startOfMonth} from 'date-fns';

@Component({
  selector: 'app-manualimp',
  templateUrl: './manualImp.component.html',
  styleUrls: ['./dataManage.component.css']
})
export class ManualImpComponent implements OnInit {
  listOfDcImpTask: DcImpTask[] = [];
  listOfDcImpSch: DcImpSch[] = [];

  table: SimpleDataGrid<DcImpSch>;
  data: DcImpSch[] = [];
  dateValue: Date;
  isSearch: boolean;
  isDialogOpen: boolean;
  selectedValue: string;
  taskSelectedValue: string;
  inputSearchValue: any;
  setOfCheckedId = new Set<string>();
  listOfCurrentPageData: DcImpSch[] = [];
  indeterminate = false;
  searchValue: string;
  private selectedIndex: number;
  tabIndex: number;
  checked: boolean;


  constructor(private dataManageService: DataManageService) {
    this.table = new SimpleDataGrid<DcImpSch>([]);
    this.dateValue = addDays(new Date(), -1);
    this.tabIndex = 0;
    this.checked = false;
    this.isSearch = true;
    this.getDcImpSchLists();
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
    this.dateValue = result;
  }

  openNewDialog(): void {
    this.isDialogOpen = true;
  }

  closeNewDialog(): void {
    this.isDialogOpen = false;
  }

  getDcImpSchLists(): void {
    this.dataManageService.getDcImpSchList()
      .subscribe(results => {
        this.table.items = results.datas;
        this.data = results.datas;
      });
  }

  changeSelectValue(selectedValue: string) {
    let filterValue = new DcImpSch();
    switch (selectedValue) {
      case '0':
        filterValue = null;
        break;
      case '1':
        filterValue.tblName = 'OFCR';
        break;
      case '2':
        filterValue.tblName = 'ATMP';
        break;
      default:
        filterValue = null;
        break;
    }
    this.table.filterRecord = filterValue;
  }

  changeInputValue(inputSearchValue: any) {
    this.table.searchValue = inputSearchValue;
  }

  ngOnInit(): void {
    // 初始化测试数据
    for (let i = 0; i < 5; i++) {
      this.listOfDcImpTask.push({
        schNo: 1000 + i,
        schName: '任务',
        isAutoUpdate: '是',
        isActive: '是',
        freq: '1-每日',
        expand: false
      });
    }
    for (let i = 0; i < 5; i++) {
      this.listOfDcImpSch.push({
        tblName: 'Table' + i,
        filenameRule: 'fileNameRule' + i,
        lastImportDate: 123456789,
        fileDate: '20200531',
        isAutoUpdate: '是',
        isActive: '是',
        dataInterface: '1',
        fileType: '2',
        ctrlFilename: 'ctrlFilename' + i
      });
    }
  }

  updateCheckedSet(tblName: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(tblName);
    } else {
      this.setOfCheckedId.delete(tblName);
    }
  }


  refreshCheckedStatus(): void {
    // const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    // this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.checked = this.listOfDcImpSch.every(({tblName}) => this.setOfCheckedId.has(tblName));
    // this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  onItemChecked(tblName: string, checked: boolean): void {
    this.updateCheckedSet(tblName, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    // this.listOfCurrentPageData.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.listOfDcImpSch.forEach(( {tblName }) => this.updateCheckedSet(tblName, checked));
    this.refreshCheckedStatus();
  }


}


export class DcImpSch {
  tblName: string;
  filenameRule: string;
  lastImportDate: number;
  fileDate: string;
  isAutoUpdate: string;
  isActive: string;
  dataInterface: string;
  fileType: string;
  ctrlFilename: string;
}

interface DcImpTask {
  schNo: number;
  schName: string;
  isAutoUpdate: string;
  isActive: string;
  freq: string;
  expand: boolean;
}

// export interface Data {
//   id: number;
//   name: string;
//   age: number;
//   address: string;
//   disabled: boolean;
// }
