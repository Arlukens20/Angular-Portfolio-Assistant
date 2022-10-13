import { Component, OnInit } from '@angular/core';
import { CurrencyServiceService } from 'src/app/Services/currency-service.service';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit {

  constructor(
    private currencyService:CurrencyServiceService
  ) { }

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


  async getList() {
    console.log('GetList')
    this.currencyService.getList().subscribe(data => {

      //Convert the data into a json Obj
      // this.model.response = JSON.stringify(data).toString();
      // let obj = JSON.parse(this.model.response);
      let obj = JSON.parse(JSON.stringify(data).toString())
      console.log(obj)
      })
  }


  convertCurrency(){
    //Make API call. 
    //Multiple factor by amount and then return the amount in the second currency!
    this.currencyService.getConvertor("AUD","CAD").subscribe(data => {

      //Convert the data into a json Obj
      // this.model.response = JSON.stringify(data).toString();
      // let obj = JSON.parse(this.model.response);
      let obj = JSON.parse(JSON.stringify(data).toString())
      console.log(obj)
  })
}
}


//TODO
//Sign up for currency convertor on rapid API.
//Get all currencies and replace the currency List