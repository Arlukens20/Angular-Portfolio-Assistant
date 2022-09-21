import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError} from  'rxjs';
import { catchError, retry, map} from 'rxjs/operators';
import { Stock } from '../Objects/stock';

@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  constructor (
    private http: HttpClient
  ) {  }

  ConfigUrl = 'https://yahoo-finance97.p.rapidapi.com'

  headers= new HttpHeaders()
  .set('content-type', 'application/x-www-form-urlencoded')
  .set('X-RapidAPI-Key', '3a9a04e3a1mshc14cbfe69161464p17d346jsndcc115ef68b8')
  .set('X-RapidAPI-Host', 'yahoo-finance97.p.rapidapi.com');

  getInfo(ticker:string):Observable<object>{
    let body = new HttpParams()
    .set('symbol', ticker);
    return this.http.post(this.ConfigUrl + '/stock-info', body , {'headers':this.headers})
  }

  //Todo add in a date 
  getPrice(ticker:string):Observable<object>{
    let body = new HttpParams()
    .set('symbol', ticker)
    .set('period', '1d');
  
     return this.http.post(this.ConfigUrl + '/price', body , {'headers':this.headers})
  }

  //TODO need to add in a calendar element to pick dates for this method?
  getPriceCustomDate(ticker:string, beginDate:string, endDate:string):Observable<object> {
    let body = new HttpParams()
    .set('symbol', ticker)
    .set("end", endDate)
    .set("start", beginDate);
  
    return this.http.post(this.ConfigUrl + '/price-customdate', body , {'headers':this.headers})
  }
}