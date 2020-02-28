import { Injectable } from '@angular/core';
import { TreeMenu } from './treeMenu';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class TreeMenuService {
  // private headers = new Headers({'Content-Type': 'application/json'});
  // private meunsUrl = 'http://localhost:8081/treeMenu';
  private meunsUrl = 'test/treeMenu/list';

  constructor(private http: HttpClient) {}

  getMenus(): Observable<TreeMenu[]> {
    // return Promise.resolve(MENUS);
    return this.http.get<TreeMenu[]>(this.meunsUrl);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
