import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable()
export default class CurrencyService {
  constructor(private http: HttpClient) {}

  configUrl = 'https://api.exchangerate.host/symbols';

  getData(url: string) {
    return this.http.get(url);
  }

  getSymbols() {
    return this.http.get(this.configUrl);
  }
}
