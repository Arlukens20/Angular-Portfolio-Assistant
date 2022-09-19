import { Component, OnInit , Input , NgModule } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart , ChartConfiguration, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale} from 'chart.js' 
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements OnInit {

  constructor() {
  }
  public show = false
  public chart: any;
  public labels = ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
  '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ]

  public data = ['467','576', '572', '79', '92','574', '573', '576']

  ngOnInit(): void {
    Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title)
    this.createChart(this.labels,this.data);
  }

  createChart(label:string[],data:string[]){  
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
  }

  toggle(){
    this.show = !this.show
    console.log("ran" + this.show)
  }
}