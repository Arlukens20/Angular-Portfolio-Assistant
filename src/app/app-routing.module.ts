import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Components/index/index.component';
import { PageComponent } from './Components/page/page.component';
import { ChartComponent } from './Components/line-chart/line-chart.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { AboutComponent } from './Components/about/about.component';
import { MetricPageComponent } from './Components/metric-page/metric-page.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ForexComponent } from './Components/forex/forex.component';
import { CryptoComponent } from './Components/crypto/crypto.component';

const routes: Routes = [
{ path: 'Index', component: IndexComponent},
// { path: 'line', component: LineChartComponent},
{ path: 'Stock', component: PageComponent},
{ path: 'Portfolio', component: PortfolioComponent},
{ path: 'About', component:AboutComponent},
{ path: 'Metric', component: MetricPageComponent},
{ path: 'Forex', component: ForexComponent},
{ path: 'Crypto', component: CryptoComponent},
{path: '**', component: PageNotFoundComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
