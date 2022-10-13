import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError} from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {

  constructor(
    private http: HttpClient
  ) { }

  ConfigUrl = 'https://currency-converter5.p.rapidapi.com/currency'

  headers= new HttpHeaders()
  .set('content-type', 'application/x-www-form-urlencoded')
  .set('X-RapidAPI-Key', '') // Place Key here!!
  .set('X-RapidAPI-Host', 'currency-converter5.p.rapidapi.com');

  getList():Observable<object>{
    let body = new HttpParams()
    return this.http.get(this.ConfigUrl + '/list', {'headers':this.headers})
  }

  getConvertor(currencyA:string,currencyB:string):Observable<object>{
    let body = new HttpParams()
    .set('format','json')
    .set('from',currencyA)
    .set('to',currencyB)
    .set('amount','1')
    //Set the params here!
    return this.http.get(this.ConfigUrl + '/convert', {'headers':this.headers})
  }

}
