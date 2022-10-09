import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public currencyA = 0;
  public currencyB = 0;

  currencyList: any[] = ['USD', 'EURO', 'YUAN', 'AUD', '', 'England'];

  onChangeA(event: any){
    console.log(event.value);
    this.currencyA = event.value
  }

  onChangeB(event: any){
    console.log(event.value);
    this.currencyB = event.value
  }


  convertCurrency(amount:String){

    //Make API call. 
    //Multiple factor by amount and then return the amount in the second currency!
    this.currencyA
  }
}


//TODO
//Sign up for currency convertor on rapid API.
//Get all currencies and replace the currency List