import { Component, OnInit } from '@angular/core';
import CurrencyService from './currency-list.service';

interface Currency {
  code: string;
  value: number;
}

@Component({
  selector: 'my-currency-list',
  templateUrl: './currency-list.component.html',
  providers: [CurrencyService],
})
export class CurrencyListComponent implements OnInit {
  currencies: Currency[] = [];
  symbols: any;
  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.getAllSymbols();
    console.log('h', this.currencies);
  }

  getAllSymbols(): void {
    this.currencyService.getSymbols().subscribe((symbols) => {
      this.symbols = Object.keys(symbols['symbols']);

      this.makeCurrenciesOutput();
    });
  }

  makeCurrenciesOutput() {
    this.symbols.forEach((it: string) => {
      this.currencyService
        .getData(`https://api.exchangerate.host/convert?from=${it}&to=PLN`)
        .subscribe((e) => {
          this.currencies.push({ code: it, value: e['result'] });
          // let arrayOfcurruencies=Object.keys(symbols["symbols"])
          console.log({ code: it, value: e['result'] });
        });
    });
  }
}
