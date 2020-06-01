import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class MerchantService {
  private mvListUrl = 'api/mcht/view';
  private mvSortListUrl = 'api/mcht/sortView';
  private mechInfoUrl = 'api/mcht/info';
  private reportUrl = 'api/mcht/report';

  constructor(
    private http: HttpClient
  ) { }

  getMerchantViewList(): Observable<any> {
    return this.http
      .get(this.mvListUrl);
  }

  sortMerchantView(order: string, orderType: string): Observable<any> {
    return this.http
      .get(this.mvSortListUrl + '?o=' + order + '&ot=' + orderType);
  }

  queryMerchantInfo(mchtId: string): Observable<any> {
    return this.http.get(this.mechInfoUrl + '?mchtId=' + mchtId);
  }

  queryBankReport(startDate: string, endDate: string): Observable<any> {
    return this.http.get(this.reportUrl + '?sd=' + startDate + '&ed=' + endDate);
  }
}

export class MerchantView {
  bankCode: string;
  merchantId: string;
  merchantName: string;
  mchtProp: string;
  regDate: string;
  address: string;
  lastTxnDate: string;
  totalCountOfMonth: number;
  sumTxnAmtOfMonth: number;
  totalCountOfYear: number;
  sumTxnAmtOfYear: number;
}
