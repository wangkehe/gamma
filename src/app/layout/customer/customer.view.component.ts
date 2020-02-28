import {Component} from '@angular/core';
import {CustomerViewService} from './customer.view.service';
import {SimpleDataGrid} from '../../shard/SimpleDataGrid/simpleDataGrid';
/**
 * Created by WKH on 2018-10-16.
 */
@Component({
  selector: 'app-customer-view',
  templateUrl: './customer.view.component.html',
  styleUrls: ['./customer.view.component.css']
})

export class CustomerViewComponent {
  queryInfo: string;
  selectedValue = '0';
  tabSelectedIndex = 0;
  custTable: SimpleDataGrid<CustomerView>;
  depTable: SimpleDataGrid<IndividualDeposit>;
  loanTable: SimpleDataGrid<IndividualLoan>;
  data: CustomerView[];
  selectCV: CustomerView;
  detailView: ViewName;
  chartOption: any;
  dtList: DepositTrend[];

  constructor(private customerViewServce: CustomerViewService) {
    this.custTable = new SimpleDataGrid<CustomerView>([]);
    this.depTable = new SimpleDataGrid<IndividualDeposit>([]);
    this.loanTable = new SimpleDataGrid<IndividualLoan>([]);
    this.detailView = 1;
  }

  queryCustomverView(queryInfo: string) {
    this.customerViewServce
      .getCustomerViewList(queryInfo)
      .subscribe(results => {
        this.custTable.items = results.datas;
        this.data = results.datas;
      });
  }

  queryIndividualDeposit(custId: string) {
    this.customerViewServce
      .getIndividualDepositList(custId)
      .subscribe(results => {
        this.depTable.items = results.datas;
      });
  }

  queryIndividualLoan(custId: string) {
    this.customerViewServce
      .getIndividualLoanList(custId)
      .subscribe(results => {
        this.loanTable.items = results.datas;
      });
  }

  onSelect(cv: CustomerView) {
    if (this.selectCV === cv) {
      this.selectCV = null;
    } else {
      this.selectCV = cv;
      this.queryIndividualDeposit(cv.customerId);
      this.queryIndividualLoan(cv.customerId);
      this.queryDepoistTrend(cv.customerId, '2');
    }
  }

  resetQueryInfo(queryInfo): void {
    this.custTable = new SimpleDataGrid<CustomerView>([]);
    this.depTable = new SimpleDataGrid<IndividualDeposit>([]);
    this.selectCV = null;
    queryInfo.value = null;
  }

  showDetailView(viewName: ViewName): void {
    this.detailView = viewName;
    console.log(viewName);
  }

  queryDepoistTrend(custId: string, freq: string): void {
      this.customerViewServce
      .getDepoistTrendList(custId, freq)
      .subscribe(results => {
        this.dtList = results.datas;
        this.setChartOption(this.dtList);
      });
  }

  setChartOption(dtList: DepositTrend[]): void {
    const depAmtList: Array<number> = new Array<number>();
    const fileDateList: Array<string> = new Array<string>();
    for (const dt of dtList) {
      depAmtList.push(dt.aviableAmt);
      const fileDate = new Date(dt.depositDate);
      fileDateList.push(fileDate.getFullYear() + '年' + (fileDate.getMonth() + 1) + '月');
    }
    this.chartOption = {
      title: {
        text: '客户近一年存贷款变化情况'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['存款', '贷款']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: fileDateList
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '存款',
          type: 'line',
          // stack: '总量',
          areaStyle: {normal: {}},
          data: depAmtList
        }]
    };
  }

  changeTabSelect(tabSelectedValue: number) {
    // this.selectedValue = selectedValue;
    console.log(tabSelectedValue);
    this.selectedValue = String(tabSelectedValue);
  }

  changeSelectValue(selectedValue: string) {
    this.tabSelectedIndex = Number(selectedValue);
  }
}

export class CustomerView {
  customerName: string;
  customerId: string;
  idType: string;
  idNo: string;
  address: string;
  phone: string;
  asset: number;
  balances: number;
}

export class IndividualDeposit {
  customerId: string;
  accountName: string;
  cardNo: string;
  passbookNo: string;
  accountSequence: number;
  prodType: number;
  prodName: string;
  signBranch: number;
  branchName: string;
  openDate: number;
  dueDate: number;
  aviableAmt: number;
}

export class IndividualLoan {
  customerId: string;
  accountName: string;
  loanAcctNo: string;
  prodType: number;
  prodName: string;
  amountLoan: number;
  loanBalance: number;
  openDate: number;
  dueDate: number;
  lastChargedDate: number;
  openBranch: string;
  branchName: string;
}

export class DepositTrend {
  customerId: string;
  accountName: string;
  address: string;
  phoneNumber: string;
  customerIcNo: string;
  depositDate: number;
  aviableAmt: number;
}

enum ViewName {
  depositView,
  loanView,
  lastYearView,
  lastMonthView
}
