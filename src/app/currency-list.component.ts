import { Component, OnInit } from '@angular/core';

interface Currency {
  code: string;
  value: number;
}

@Component({
  selector: 'my-currency-list',
  templateUrl: './currency-list.component.html'
})
export class CurrencyListComponent implements OnInit  {

  private API_URL = 'https://api.exchangeratesapi.io/latest?base=PLN';

  currencies: Currency[] = [];

  ngOnInit() {
    // Zamień ten fragment na rzeczywiste dane wykonując zapytanie GET pod this.API_URL
    this.currencies = [
      { code: 'GBP', value: 5.21}
    ];
  }
  
}
