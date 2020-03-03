import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any[],searchText:any,property:string): any[] {

    if(searchText && property){

               return value.filter((it:any)=>{return it[property].includes(searchText) });
    }
    else
        return value;

}
}
