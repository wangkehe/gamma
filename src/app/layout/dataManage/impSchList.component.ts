/**
 * Created by WKH on 2018-3-16.
 */
import { Component, OnInit } from '@angular/core';
import {DataManageService} from './dataManage.service';
import {SimpleDataGrid} from '../../shard/SimpleDataGrid/simpleDataGrid';

@Component({
  selector: 'app-importdb',
  templateUrl: './impSchList.component.html',
  styleUrls: ['./importdb.component.css']
})
export class ImpSchListComponent implements OnInit {
  table: SimpleDataGrid<DcImpSch>;
  data: DcImpSch[];
  isSearch: boolean;
  isDialogOpen: boolean;
  selectedValue: string;
  inputSearchValue: any;
  searchValue: string;
  private selectedIndex: number;


  constructor(private dataManageService: DataManageService) {
    this.table = new SimpleDataGrid<DcImpSch>([]);
    this.isSearch = true;
    this.getDcImpSchLists();
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

  }


}


export class DcImpSch {
  tblName: string;
  filenameRule: string;
  lastImportDate: BigInteger;
  fileDate: string;
  isAutoUpdate: string;
  isActive: string;
  dataInterface: string;
  fileType: string;
  ctrlFilename: string;
}
