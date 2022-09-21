import { Injectable } from '@angular/core';
import { Chart , ChartConfiguration, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale} from 'chart.js' 


@Injectable({
  providedIn: 'root'
})

export class ChartServiceService {

  constructor( ) {
   }

  public show = false;
  public chart: any;

  createChart(label:string[],data:string[]){  
    Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title)

    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: label, 
	       datasets: [
          {
            label: "Sales",
            data: data,
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
    return this.chart
  }

  destroyCharts(){
    console.log("ChartDestroy")
  }
}