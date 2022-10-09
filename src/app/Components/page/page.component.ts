import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/Objects/stock';
import { StockEarnings } from 'src/app/Objects/stock-earnings';
import { StockServiceService } from '../../Services/stock-service.service';

import { Subscriber, throwError} from  'rxjs';
import { ChartServiceService } from 'src/app/Services/chart-service.service';
import { ChartData } from 'src/app/Objects/chart-data';
import { Chart } from 'chart.js';
import { ChartComponent } from '../line-chart/line-chart.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  page = {
    title: 'Portfolio Tracker',
    subtitle: 'Welcome Home!',
    content: 'Search your favorite Stock Ticker.'
  };

  //Init model of stock here
  model = new Stock('','','','','','','','','','','');
  chartModel = new ChartData([''],[''],['']);
  earningArray: StockEarnings[] = ([]);

  constructor(
    private stockService: StockServiceService,
    private chartService:ChartServiceService,
    private line:ChartComponent,
    private toastr:ToastrService) {
  }

  ngOnInit(): void {
  //  this.getIndexValues()
  }

  public date = [] as string[]
  public close = [] as string[]
  public volume = [] as string[]
  public showChart = false

  public nasdaq = 0
  public spy = 0
  public dow = 0

  //Method use to send all API requests.
  async sendAll(stock:string){
    console.log("SendAll")
    this.getData(stock)
    this.getPrice(stock)
    this.getFinancials(stock)
    this.getEarnings(stock)
  }

  //How to get these values?
  getIndexValues(){
    console.log('Get Index');

    //Spy
    this.stockService.getPrice("^GSPC").subscribe(data => {

      //Convert the data into a json Obj
      // this.model.response = JSON.stringify(data).toString();
      // let obj = JSON.parse(this.model.response);
      let obj = JSON.parse(JSON.stringify(data).toString())

      if(obj['data'] == ''){
        this.showToastr("Please Try again")
      }else{
        this.spy = Math.floor(Number(obj['data'][0]['Close']));
        console.log(this.spy)
    }
  })

  //NasDaq
  console.log('Get Index');
  this.stockService.getPrice("^IXIC").subscribe(data => {

    //Convert the data into a json Obj
    // this.model.response = JSON.stringify(data).toString();
    // let obj = JSON.parse(this.model.response);
    let obj = JSON.parse(JSON.stringify(data).toString())

    if(obj['data'] == ''){
      this.showToastr("Please Try again")
    }else{
      this.nasdaq = Math.floor(Number(obj['data'][0]['Close']));
      console.log(this.nasdaq)
  }
})

//DOW ^DJI
console.log('Get Index');
this.stockService.getPrice("^DJI").subscribe(data => {

  //Convert the data into a json Obj
  // this.model.response = JSON.stringify(data).toString();
  // let obj = JSON.parse(this.model.response);
  let obj = JSON.parse(JSON.stringify(data).toString())

  if(obj['data'] == ''){
    this.showToastr("Please Try again")
  }else{
    this.dow = Math.floor(Number(obj['data'][0]['Close']));
    console.log(this.dow)
}
})
}

  async getData(stock:string) {
    this.model.Ticker = stock
    console.log('Change the Ticker to ',this.model.Ticker," In getData method of page");
    this.stockService.getInfo(stock).subscribe(data => {

      //Convert the data into a json Obj
      // this.model.response = JSON.stringify(data).toString();
      // let obj = JSON.parse(this.model.response);
      let obj = JSON.parse(JSON.stringify(data).toString())

      if(obj['data'] == ''){
        this.showToastr("Please Try again")
      }else{
        this.model.longBusinessSummary = obj['data']['longBusinessSummary'];
        this.model.website = obj['data']['website'];
        this.model.targetMeanPrice = obj['data']['targetMeanPrice'];
        this.model.targetHighPrice = obj['data']['targetHighPrice'];
        this.model.targetLowPrice = obj['data']['targetLowPrice'];
        this.model.targetMedianPrice = obj['data']['targetMedianPrice'];
      }
    })
  }

  async getPrice(stock:string) {
    this.model.Ticker = stock
    console.log('Change the Ticker to ',this.model.Ticker," In getPrice method of page");
    this.stockService.getPrice(stock).subscribe(data => {

      //Convert the data into a json Obj
      // this.model.response = JSON.stringify(data).toString();
      // let obj = JSON.parse(this.model.response);
      let obj = JSON.parse(JSON.stringify(data).toString())

      if(obj['data'] == ''){
        this.showToastr("Please Try again")
      }else{
        this.model.low = obj['data'][0]['Low'];
        this.model.high = obj['data'][0]['High'];
        this.model.volume = obj['data'][0]['Volume'];
    }
  })

  }

  async getFinancials(stock:string) {
    this.model.Ticker = stock
    console.log('Change the Ticker to ',this.model.Ticker," In getFinancials method of page");
    this.stockService.getFinancials(stock).subscribe(data => {

      //Convert the data into a json Obj
      // this.model.response = JSON.stringify(data).toString();
      // let obj = JSON.parse(this.model.response);

      let obj = JSON.parse(JSON.stringify(data).toString())
      // console.log(obj)

      if(obj['data'] == ''){
        this.showToastr("Please Try again")
      }else{
       //Logic For Financials Here!!
      }
    })
  }

  async getEarnings(stock:string) {
    this.model.Ticker = stock
    // console.log('Change the Ticker to ',this.model.Ticker," In getEarnings method of page");
    this.stockService.getEarnings(stock).subscribe(data => {

      //Convert the data into a json Obj
      this.model.response = JSON.stringify(data).toString();
      let obj = JSON.parse(this.model.response);
      
      if(obj['data'] == ''){
        this.showToastr("Please Try again")
      }else{
        this.earningArray.push(new StockEarnings(obj['data'][0]['Earnings'],obj['data'][0]['Revenue'],obj['data'][0]['Year']))
        this.earningArray.push(new StockEarnings(obj['data'][1]['Earnings'],obj['data'][1]['Revenue'],obj['data'][1]['Year']))
        this.earningArray.push(new StockEarnings(obj['data'][2]['Earnings'],obj['data'][2]['Revenue'],obj['data'][2]['Year']))
        this.earningArray.push(new StockEarnings(obj['data'][3]['Earnings'],obj['data'][3]['Revenue'],obj['data'][3]['Year']))
        // console.log("Testing " + i)
      }
      console.log(this.earningArray)
    })
  }

  async getPriceCustomDate(stock:string,beginDate:string,endDate:string) {
    this.model.Ticker = stock
    console.log('Change the Ticker to ',this.model.Ticker," In getPriceCustomDate method of page", stock , beginDate , endDate);
    this.stockService.getPriceCustomDate(stock,beginDate,endDate).subscribe(data => {

      //Convert the data into a json Obj
      this.model.response = JSON.stringify(data).toString()
      let obj = JSON.parse(this.model.response);

      this.date = []
      this.close = []
      this.volume = []

      let i = 0
      if(obj['data'] == ''){
        this.showToastr("Please Try again")
      }else{
      do{
        var date = new Date(obj['data'][i]['Date']).toLocaleDateString("en-us")
        this.date.push(date)
        this.close.push(obj['data'][i]['Close'])
        this.volume.push(obj['data'][i]['Volume'])
        i++
      }while(obj['data'][i+1] != null)

      this.chartModel.close = this.close;
      this.chartModel.date = this.date;
      this.chartModel.volume = this.volume;
    }
     // console.log(this.date,this.close,this.volume)
    })
  }


  // Better way to implement this? Every two creates a different chart
  //1: date/close
  //2: date/volume
  //3: year/revenue
  buildCharts(){
    if(this.date[0] != null){
      this.chartService.buildCloseChart(this.date,this.close)
      this.chartService.buildVolumeChart(this.date,this.volume)
    }

    if(this.earningArray != null){
      this.chartService.buildEarningsChart(this.earningArray)
    }
    this.showChart = true
    // console.log("Create Chart")
  }

  clearCharts(){
    this.chartService.destroyCharts();
    this.showChart = false
  }

  showToastr(msg:string){
    // this.toastr.success('This is the success toastr')
    this.toastr.error(msg,"Error",{
      timeOut:10000,
      closeButton:true
    })
  }
}