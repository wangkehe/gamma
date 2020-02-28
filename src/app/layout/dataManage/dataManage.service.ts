import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DataManageService {
  private dcImpSchListUrl = 'test/dm/schList';

  constructor(
    private http: HttpClient
  ) { }

  getDcImpSchList(): Observable<any> {
    return this.http
      .get(this.dcImpSchListUrl);
  }
}
