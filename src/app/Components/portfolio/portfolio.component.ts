import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { StockPortfolioItem } from 'src/app/Objects/stock-portfolio-item';
import { StockServiceService } from 'src/app/Services/stock-service.service';
import { Stock } from 'src/app/Objects/stock';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  // article: { title: string, text: string } = {
  //   title: "default title",
  //   text: "default text",
  // }

  constructor(private stockService: StockServiceService) { 
  }

  ngOnInit(): void {
  }

  public stockArray: StockPortfolioItem[] = [];
  portfolioValue = 0;
  model = new Stock('','','','','','','','','','','');
 
  addToPortfolio(ticker:string,quantity:string) {
    this.stockService.getPrice(ticker).subscribe(data => {
      this.model.response = JSON.stringify(data).toString();
      let object = JSON.parse(this.model.response);
      console.log(object)
      this.model.low = object['data'][0]['Low'];
      let obj = new StockPortfolioItem(ticker,quantity,StockPortfolioItem.length + 1,Number(this.model.low));
      this.stockArray.push(obj);
      this.portfolioValue += obj.price*parseInt(quantity);
      console.log(this.portfolioValue)
    })

    
    // Modify this for the price aspect?
    console.log("Added ", ticker)
  }

  updatePortfolio() {
    console.log("Update Portfolio")
  }

//   trackByFn(index: number, item: any) {


//     console.log("trackbyFn" + item.stockId)
//     return item.stockId;
    
//  } 

  remove(index:number): void{ 
    //Modify this for the price aspect.
    this.portfolioValue -= this.stockArray[index].price*parseInt(this.stockArray[index].Quantity)
    this.stockArray.splice(index, 1)
  }
}
