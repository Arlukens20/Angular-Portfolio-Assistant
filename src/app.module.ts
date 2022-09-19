import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { MaterialModule } from './app/Components/material/material.module';
import { PageComponent } from './app/Components/page/page.component';
import { LineChartComponent } from './app/Components/line-chart/line-chart.component';
import { IndexComponent } from './app/Components/index/index.component';
import { PortfolioComponent } from './app/Components/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    LineChartComponent,
    IndexComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
