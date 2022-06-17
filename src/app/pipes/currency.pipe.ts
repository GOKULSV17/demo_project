import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency1'
})
export class CurrencyPipe implements PipeTransform {

  transform(val: number ) {
    return new Intl.NumberFormat('ja-Jp', {
      style: 'currency',
      currency: 'ZAR',
      
     
      minimumFractionDigits: 0,
      currencyDisplay:'narrowSymbol',
      useGrouping:true,
    }).format(Number(val));
   
  }


}
