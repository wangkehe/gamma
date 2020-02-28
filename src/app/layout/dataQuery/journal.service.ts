import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Created by WKH on 2018/1/30.
 */

@Injectable()
export class JournalService {
  private headers = new Headers({responseType: 'blob'});
  private url = 'api/report/tr32dataQuery';
  private exportUrl = 'api/report/export';
  private exportAllUrl = 'api/report/exportAll';
  // private url = 'api/Alpha/report/tr32test';
  // results$: Observable<any>;
  records: Observable<JournalCCIS[]>;
  constructor(
    // private http: Http
    private http: HttpClient
  ) { }

  getJournalRecord(queryAccount: string): Observable<any> {
    return this.http
      .get(this.url + '?account=' + queryAccount);
      // .map(response => response['datas'] as Journal[]);
      // .map((r: Response) => r.json().data as Journal[]);
  }

  export(account): Observable<any> {
    return this.http
      .get<any>(this.exportUrl + '?account=' + account);
  }

  exportAll(accounts): Observable<any> {
    return this.http
      .get<any>(this.exportAllUrl + '?account=' + accounts);
  }


  private handleError(error: any) {
    console.error('An error occurred', error);
    // return Observable.throw(error);
    return Promise.reject(error.message || error);
  }
}

export class JournalCCIS {
  sn: number;
  trn_no: number;
  trn_dat: number;
  trn_time: string;
  teller: string;
  checker: string;
  auth: string;
  trn_code: string;
  cq_num: string;
  status: string;
  trn_amt: number;
}
