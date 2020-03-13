import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform { //реализация интерфейса 

  transform(notes: any[], sortParam: string, filterParam: string) {
    if((isNullOrUndefined(sortParam) || sortParam=='') && (isNullOrUndefined(filterParam) || filterParam=='')){
      return notes;
    }

    if (sortParam=='dataAdd'){
        notes = notes.sort((function (a, b){
          if(Number(String(a.dataAdd).split('-').join(''))< Number(String(b.dataAdd).split('-').join('')))
            return -1;
          else if (Number(String(a.dataAdd).split('-').join('')) > Number(String(b.dataAdd).split('-').join('')))
            return 1;
          else 
            return 0;
        }))
    }
    else if (sortParam=='dataEnd'){
      notes = notes.sort((function (a, b){
        if(Number(String(a.dataEnd).split('-').join(''))< Number(String(b.dataEnd).split('-').join('')))
          return -1;
        else if (Number(String(a.dataEnd).split('-').join('')) > Number(String(b.dataEnd).split('-').join('')))
          return 1;
        else 
          return 0;
      }))
    }

    if (!isNullOrUndefined(notes) && filterParam.trim() !== "") {
       let filter = notes.filter(
       note => note.content.toLowerCase().indexOf(filterParam.toLowerCase()) === 0);
       return filter;
    }
    return notes;
  }

}
