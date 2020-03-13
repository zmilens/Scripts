import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(mothers: any[], filterM: string, sortM: string){
    if (sortM===undefined && isNullOrUndefined(filterM)) {
      return mothers;
    }
    if (!isNullOrUndefined(mothers) && sortM !== undefined){
      switch(sortM){
        case 'id':{
          mothers=mothers.sort((function (a, b){
            if (a.id < b.id)
              return -1;
            else if (a.id > b.id)
              return 1;
            else
                return 0;
            }))
            break;
          }
        case 'price':{
          mothers=mothers.sort((function (a, b){
            if (a.price < b.price)
              return -1;
            else if (a.price > b.price)
              return 1;
            else 
              return 0;
            }))
          break;
        }
        case 'price2':{
          mothers=mothers.sort((function (a, b){
            if (a.price > b.price)
              return -1;
            else if (a.price < b.price)
              return 1;
            else 
              return 0;
          }))
          break;
        }
      }
    }
    if (!isNullOrUndefined(mothers) && !isNullOrUndefined(filterM)){
      let filt = mothers.filter(
        mother => (mother.name.toLowerCase().indexOf(filterM.toLowerCase())==0 || mother.formfactor.toLowerCase().indexOf(filterM.toLowerCase())==0));
      return filt;
    }

    return mothers;
  }
}
