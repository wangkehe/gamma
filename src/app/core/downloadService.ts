import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DownloadService {
  constructor( private http: HttpClient) { }

  // Blob请求
  requestBlob(url: any, params?: any): Observable<any> {
    console.log(params);
    console.log(url);
    return this.http.request('post', url, {params: params, observe: 'response', responseType: 'blob'});
  }

  downFile(result, fileName, fileType?: any) {
    const data = result.body;
    console.log(fileName);
    console.log(data);
    const blob = new Blob([data], {type: fileType ? fileType : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
    const objectUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    console.log(blob);
    console.log(objectUrl);
    a.setAttribute('style', 'display:none');
    a.setAttribute('href', objectUrl);
    a.setAttribute('download', fileName);
    a.click();
    URL.revokeObjectURL(objectUrl);
  }

  export(url: string,  fileName: string, params?: any, fileType?: any) {
    this.requestBlob(url, params).subscribe(
      result => {
        console.log(result);
        this.downFile(result, fileName, fileType);
      }
    );
  }
}
