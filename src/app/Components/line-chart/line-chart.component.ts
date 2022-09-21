import { Component, OnInit , Input , NgModule } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart , ChartConfiguration, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale} from 'chart.js' 
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ChartServiceService } from 'src/app/Services/chart-service.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements OnInit {

  constructor(private chartService:ChartServiceService) {
  }

  public show = false
  public chart: any;
  public chartVolume: any;
  public chartArray = [] as Chart[];

  ngOnInit(): void {
    Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title)
  }

  createChart(label:string[],data:string[]){  
    // Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title)

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

  createVolumeChart(label:string[],data:string[]){  
    // Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title)

    this.chartVolume = new Chart("chartVolume", {
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

  destroy(){
    this.chart.destroy()
    this.chartVolume.destroy()
  }
}