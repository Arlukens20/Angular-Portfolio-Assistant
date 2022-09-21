import { Injectable } from '@angular/core';
import { Chart , ChartConfiguration, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale} from 'chart.js' 
import { LineChartComponent } from "src/app/Components/line-chart/line-chart.component"


@Injectable({
  providedIn: 'root'
})

export class ChartServiceService {

  constructor() {
   }

   public line = new LineChartComponent(this)

   buildChartArray(array1:any[],array2:any[],array3:any[],array4:any[]){
    console.log("ChartArray")
    this.line.createChart(array1,array2)
    this.line.createVolumeChart(array3,array4)
  }

  destroyCharts(){
    this.line.destroy()
    console.log("ChartDestroy")
  }
}