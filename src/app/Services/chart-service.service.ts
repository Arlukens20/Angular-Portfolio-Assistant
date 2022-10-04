import { Injectable } from '@angular/core';
import { Chart , ChartConfiguration, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale} from 'chart.js' 
import { ChartComponent } from "src/app/Components/line-chart/line-chart.component"


@Injectable({
  providedIn: 'root'
})

export class ChartServiceService {

  constructor() {
   }

   public line = new ChartComponent(this)

   buildCloseChart(array1:any[],array2:any[]){
    console.log("Close Chart")
    this.line.createChart(array1,array2)
  }

  buildVolumeChart(array1:any[],array2:any[]){
    console.log("Volume Chart")
    this.line.createVolumeChart(array1,array2) 
  }


  //Throws error can't find context. Just click button again?
  buildEarningsChart(array1:any[]){
    console.log("Eanings Chart")
    let year = []
    let revenue = []

    for(let i = 0; i <array1.length - 1; i++ ){
      year.push(array1[i]['year'])
      revenue.push(array1[i]['revenue'])
    }
    
    this.line.createEarningsChart(year,revenue) 
  }

  destroyCharts(){
    this.line.destroy()
    console.log("ChartDestroy")
  }
}