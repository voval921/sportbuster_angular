import {Injectable, Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'tablePipe'
})
export class TablePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}


@Pipe({name: 'groupBy'})
export class GroupByPipe implements PipeTransform {
  transform(value: Array<any>, field: string): Array<any> {
    const groupedObj = value.reduce((prev, cur)=> {
      if(!prev[cur[field]]) {
        prev[cur[field]] = [cur];
      } else {
        prev[cur[field]].push(cur);
      }
      return prev;
    }, {});
    return Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] }));
  }
}

@Pipe({name: 'groupByObj'})
export class GroupByPipeObj implements PipeTransform {
  transform(value: Array<any>, field: string[]): Array<any> {
    const groupedObj = value.reduce((prev, cur)=> {
      if(!prev[cur[field[0]][field[1]]]) {
        prev[cur[field[0]][field[1]]] = [cur];
      } else {
        prev[cur[field[0]][field[1]]].push(cur);
      }
      return prev;
    }, {});
    return Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] }));
  }
}


@Pipe({
  name: 'filter'})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], fields: string[], value: string): any[] {
    if (!items) {
      return [];
    }
    if (!fields || !value) {
      return items;
    }

    let filter = {}
    for (let field of fields) {
      filter[field] = value;
    }

    return items.filter(item => {
      let notMatchingField = Object.keys(filter)
        .find(key => item[key].toLowerCase().includes(value.toLowerCase()));
      return notMatchingField;
    });
  }
}

@Pipe({
  name: 'filterMatch'})
@Injectable()
export class FilterPipeMatch implements PipeTransform {
  transform(items: any[], fields: string[], value: any): any[] {
    if (!items) {
      return [];
    }
    if (!fields) {
      return items;
    }

    let filter = {}
    for (let field of fields) {
      filter[field] = value;
    }

    return items.filter(item => {
      let notMatchingField = Object.keys(filter)
        .find(key => item[key] == value);
      return notMatchingField;
    });
  }
}

@Pipe({
  name: 'orderBy'
})
export class OrderPipe implements PipeTransform {

  transform(array: Array<{}>, args: string[]): Array<any> {

    array = array || [];

    if (typeof args === 'undefined' || args.length !== 2) {
      return array;
    }

    const [key, direction] = args;

    if (direction !== 'ASC' && direction !== 'DESC') {
      return array;
    }

    return _.orderBy(array, (item:any) => item[key], direction.toLowerCase());
  }
}
