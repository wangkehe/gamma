import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'fileType'
})
export class FileTypePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    switch (value) {
      case 'ALL': return '全量';
      case 'ADD': return '增量';
      default: return '未知';
    }
  }
}
