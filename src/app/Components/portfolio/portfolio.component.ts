import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { StockPortfolioItem } from 'src/app/Objects/stock-portfolio-item';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  // article: { title: string, text: string } = {
  //   title: "default title",
  //   text: "default text",
  // };
  

  constructor() { 
  }

  ngOnInit(): void {
  }

  public stockArray: StockPortfolioItem[] = []
 
   
  addToPortfolio(ticker:string,quantity:string) {
    let obj = new StockPortfolioItem(ticker,quantity,StockPortfolioItem.length + 1)
    this.stockArray.push(obj)
    console.log("addToPorfolio")
  }

  trackByFn(index: number, item: any) {
    console.log("trackbyFn")
    return item.stockId;
    
 } 

  remove(stockId:number){
    // this.stockArray.remove
    console.log("Remove Function" + stockId)
  }
}
