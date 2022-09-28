import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/Objects/stock';
import { StockEarnings } from 'src/app/Objects/stock-earnings';
import { StockServiceService } from '../../Services/stock-service.service';

import { Subscriber, throwError} from  'rxjs';
import { ChartServiceService } from 'src/app/Services/chart-service.service';
import { ChartData } from 'src/app/Objects/chart-data';
import { Chart } from 'chart.js';
import { LineChartComponent } from '../line-chart/line-chart.component';

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

  

  constructor(private stockService: StockServiceService,private chartService:ChartServiceService,private line:LineChartComponent) {
  }

  ngOnInit(): void {
  }

  public date = [] as string[]
  public close = [] as string[]
  public volume = [] as string[]
  public showChart = false
  

  async getData(stock:string) {
    this.model.Ticker = stock
    console.log('Change the Ticker to ',this.model.Ticker," In getData method of page");
    this.stockService.getInfo(stock).subscribe(data => {
      this.model.response = JSON.stringify(data).toString();
      let obj = JSON.parse(this.model.response);
      this.model.longBusinessSummary = obj['data']['longBusinessSummary'];
      this.model.website = obj['data']['website'];
      this.model.targetMeanPrice = obj['data']['targetMeanPrice'];
      this.model.targetHighPrice = obj['data']['targetHighPrice'];
      this.model.targetLowPrice = obj['data']['targetLowPrice'];
      this.model.targetMedianPrice = obj['data']['targetMedianPrice'];
      
    })
  }

  async getPrice(stock:string) {
    this.model.Ticker = stock
    console.log('Change the Ticker to ',this.model.Ticker," In getPrice method of page");
    this.stockService.getPrice(stock).subscribe(data => {
      this.model.response = JSON.stringify(data).toString();
      let obj = JSON.parse(this.model.response);
      // console.log(obj)
      this.model.low = obj['data'][0]['Low'];
      this.model.high = obj['data'][0]['High'];
      this.model.volume = obj['data'][0]['Volume'];
    })
  }

  async getFinancials(stock:string) {
    this.model.Ticker = stock
    console.log('Change the Ticker to ',this.model.Ticker," In getFinancials method of page");
    this.stockService.getFinancials(stock).subscribe(data => {
      this.model.response = JSON.stringify(data).toString();
      let obj = JSON.parse(this.model.response);
      console.log(obj)
      // this.model.low = obj['data'][0]['Low'];
      // this.model.high = obj['data'][0]['High'];
      // this.model.volume = obj['data'][0]['Volume'];
    })
  }

  async getEarnings(stock:string) {
    this.model.Ticker = stock
    console.log('Change the Ticker to ',this.model.Ticker," In getEarnings method of page");
    this.stockService.getEarnings(stock).subscribe(data => {
      this.model.response = JSON.stringify(data).toString();
      let obj = JSON.parse(this.model.response);
      
      // for(let i = 0; i < this.model.response.length - 1; i++){
        this.earningArray.push(new StockEarnings(obj['data'][0]['Earnings'],obj['data'][0]['Revenue'],obj['data'][0]['Year']))
        this.earningArray.push(new StockEarnings(obj['data'][1]['Earnings'],obj['data'][1]['Revenue'],obj['data'][1]['Year']))
        this.earningArray.push(new StockEarnings(obj['data'][2]['Earnings'],obj['data'][2]['Revenue'],obj['data'][2]['Year']))
        this.earningArray.push(new StockEarnings(obj['data'][3]['Earnings'],obj['data'][3]['Revenue'],obj['data'][3]['Year']))
        // console.log("Testing " + i)
      // }
      console.log(this.earningArray)
    })
  }

  async getPriceCustomDate(stock:string,beginDate:string,endDate:string) {
    this.model.Ticker = stock
    console.log('Change the Ticker to ',this.model.Ticker," In getPriceCustomDate method of page", stock , beginDate , endDate);
    this.stockService.getPriceCustomDate(stock,beginDate,endDate).subscribe(data => {
      this.model.response = JSON.stringify(data).toString()
      let obj = JSON.parse(this.model.response);

      this.date = []
      this.close = []
      this.volume = []

      let i = 0
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

      // console.log(this.date,this.close,this.volume)
    })
  }


  // Better way to implement this? Every two creates a different chart
  //1: date/close
  //2: date/volume
  buildCharts(){
    this.chartService.buildChartArray(this.date,this.close,this.date,this.volume)
    this.showChart = true
    // console.log("Create Chart")
  }

  clearCharts(){
    this.chartService.destroyCharts();
    this.showChart = false
  }

  // async JsonParser(obj:Object){
  //   console.log(typeof obj)

  //   // console.log(jsonObj)
  // }
}