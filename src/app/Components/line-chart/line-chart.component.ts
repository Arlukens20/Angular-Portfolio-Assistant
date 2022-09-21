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
  public chartArray = [] as Chart[];

  ngOnInit(): void {
    Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title)
  }

  buildChartArray(array1:any[],array2:any[]){
    this.chartArray.push(this.chartService.createChart(array1,array2))
  }

  // toggle(){
  //   this.show = !this.show
  //   console.log("ran" + this.show)
  // }
}