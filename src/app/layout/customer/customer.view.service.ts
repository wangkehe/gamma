import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CustomerViewService {
  private cvListUrl = 'api/cv/view';
  private depListUrl = 'api/cv/deposit';
  private loanListUrl = 'api/cv/loan';
  private depTrendUrl = 'api/cv/depTrend';

  constructor(
    private http: HttpClient
  ) { }

  getCustomerViewList(queryInfo: string): Observable<any> {
    return this.http
      .get(this.cvListUrl  + '?queryInfo=' + queryInfo);
  }

  getIndividualDepositList(custId: string): Observable<any> {
    return this.http
      .get(this.depListUrl  + '?custId=' + custId);
  }

  getIndividualLoanList(custId: string): Observable<any> {
    return this.http
      .get(this.loanListUrl  + '?custId=' + custId);
  }

  getDepoistTrendList(custId: string, freq: string): Observable<any> {
    return this.http
      .get(this.depTrendUrl  + '?custId=' + custId + '&freq=' + freq);
  }
}
