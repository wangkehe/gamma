/**
 * Created by WKH on 2018-3-16.
 */
import { Component, OnInit } from '@angular/core';
// import {SimpleDataGrid} from '../../shared/SimpleDataGrid/simpleDataGrid';
import {DataManageService} from './dataManage.service';

@Component({
  selector: 'app-manualimp',
  templateUrl: './manualImp.component.html',
  styleUrls: ['./importdb.component.css']
})
export class ManualImpComponent implements OnInit {
  // table: SimpleDataGrid<DcImpSch>;
  // data: DcImpSch[];

  constructor(private dataManageService: DataManageService) {
    // this.table = new SimpleDataGrid<DcImpSch>([]);
    this.getDcImpSchLists();
  }

  getDcImpSchLists(): void {
    // this.dataManageService.getDcImpSchList()
    //   .subscribe(results => {
    //     // this.table.items = results['datas'];
    //     // this.data = results['datas'];
    //   });
  }

  ngOnInit(): void {

  }
}

