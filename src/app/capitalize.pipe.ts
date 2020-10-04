import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
   let firstchar=value.substring(0,1);
   let allotherchars=value.substring(1,value.Length);
   
   let newvalue=firstchar.toUpperCase()+allotherchars.toLowerCase();
   
   return newvalue;
  }

}
