import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { MaterialModule } from './app/Components/material/material.module';
import { PageComponent } from './app/Components/page/page.component';
import { ChartComponent } from './app/Components/line-chart/line-chart.component';
import { IndexComponent } from './app/Components/index/index.component';
import { PortfolioComponent } from './app/Components/portfolio/portfolio.component';
import { AboutComponent } from './app/Components/about/about.component';
import { MetricPageComponent } from './app/Components/metric-page/metric-page.component';
import { PageNotFoundComponent } from './app/Components/page-not-found/page-not-found.component';
import { ForexComponent } from './app/Components/forex/forex.component';
import { CryptoComponent } from './app/Components/crypto/crypto.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    ChartComponent,
    IndexComponent,
    PortfolioComponent,
    AboutComponent,
    MetricPageComponent,
    PageNotFoundComponent,
    ForexComponent,
    CryptoComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ToastrModule.forRoot({
			positionClass: 'toast-top-center',
})
  ],
  providers: [ChartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
