/**
 * Created by WKH on 2018/1/30.
 */
// import './object.extensions';

export class SimpleDataGrid<T> {
  searchValue: any; // searchValue: T = <T>{};
  filterRecord: object;
  currentPageIndex: number;
  pageSize: number;
  // tslint:disable-next-line:variable-name
  private _items: T[];

  constructor(items: T[], pageSize: number = 10) {
    this._items = items;
    this.pageSize = pageSize;
    this.currentPageIndex = 1;
  }

  search(source, searchValue): boolean {  // 搜索表格内容，记录中包含搜索内容即返回真
    let flag = false;
    if (searchValue === undefined || searchValue === null || searchValue === '') {
      return true;
    }
    if (source === searchValue) {
      return true;
    }
    if (typeof searchValue === 'string') {  // 搜索的内容为字符类型
      for ( const prop in source) {
        if (!source.hasOwnProperty(prop)) {
          continue;
        }
        if (source[prop] === undefined || source[prop] === null || source[prop] === '') {
          continue;
        }
        if (typeof source[prop] === 'string' && source[prop].toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
          flag = true;
          break;
        }
        if (typeof source[prop] === 'number' && source[prop] === parseFloat(searchValue)) {
          flag = true;
          break;
        }
        if (typeof source[prop] === 'boolean' && source[prop] === searchValue) {
          flag = true;
          break;
        }
      }
    } else if (typeof searchValue === 'object') { // 搜索的内容为对象时
      let isObjectSame = true;
      if (source === searchValue) {
        return true;
      }
      if (!( source instanceof Object ) || !( searchValue instanceof Object )) {
        return false;
      }
      for ( const prop in searchValue) {
        if (!source.hasOwnProperty(prop)) {
          continue;
        }
        if (searchValue[prop] === undefined || searchValue[prop] === null || searchValue[prop] === '') {
          continue;
        }
        if (typeof searchValue[prop] === 'object' && this.search(source[prop], searchValue[prop])) {
          continue;
        }
        if (typeof searchValue[prop] === 'string') {    // 所有查找的对象属性都为 true 时才返回 true
          isObjectSame = isObjectSame && source[prop].toString().toLowerCase().indexOf(
            searchValue[prop].toLowerCase()) > -1;
        }
      }
      flag = isObjectSame;
    }
    return flag;
  }

  get totalRows(): number {
    return this._items.length;
  }

  get totalFilteredRows(): number {
    return this.itemsFiltered.length;
  }

  private get currentRowStart(): number {
    return this.totalRows > this.pageSize
      ? (this.startRow + 1)
      : this.totalRows === 0 ? 0 : 1;
  }

  private get currentRowEnd(): number {
    return (this.startRow + this.pageSize) < this.totalRows
      ? (this.startRow + this.pageSize)
      : this.totalRows;
  }

  get startRow(): number {
    if (this.currentPageIndex === 0) {
      return 0;
    }
    return (this.currentPageIndex - 1) * this.pageSize;
  }

  get maxPageIndex(): number {
    const index = Math.ceil(this.totalFilteredRows / this.pageSize);
    return index;
  }

  set items(value: T[]) {
    this._items = value;
  }

  get items(): T[] {
    return this._items;
  }

  get itemsFiltered(): T[] {
    if (this.filterRecord != null) {
      return this.items.filter(item => this.search(item, this.filterRecord))
        .filter(item => this.search(item, this.searchValue));
    } else {
      return this.items.filter(item => this.search(item, this.searchValue));
    }

  }

  get itemsOnCurrentPage(): T[] {
    return this.itemsFiltered.slice(this.startRow,
      this.startRow + this.pageSize);
  }
}
