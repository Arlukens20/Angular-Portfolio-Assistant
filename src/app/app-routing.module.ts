import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Components/index/index.component';
import { PageComponent } from './Components/page/page.component';
import { LineChartComponent } from './Components/line-chart/line-chart.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';

const routes: Routes = [
{ path: 'Index', component: IndexComponent},
{ path: 'line', component: LineChartComponent},
{ path: 'StockFinder', component: PageComponent},
{ path: 'Portfolio', component: PortfolioComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
