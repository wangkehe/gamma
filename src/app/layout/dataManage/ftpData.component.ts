import {Component} from '@angular/core';
import {DataManageService} from './dataManage.service';
import {SimpleDataGrid} from '../../shard/SimpleDataGrid/simpleDataGrid';

@Component({
  selector: 'app-ftpdata',
  templateUrl: './ftpData.component.html',
  styleUrls: ['./dataManage.component.css']
})
export class FtpDataComponent {
  constructor(private dataManageService: DataManageService) {

  }
}

