import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-portfolio-tracker';

  constructor(private router: Router) {
  }


//Methods to go to route to specific Componets.

  goToIndex() {
    this.router.navigate(['/', 'Index']);
  }

  goToPage() {
    this.router.navigate(['/', 'Stock']);
  }

  goToMetrics() {
    this.router.navigate(['/', 'Metric']);
  }

  goToAbout() {
    this.router.navigate(['/', 'About']);
  }

  // goToLine() {
  //   this.router.navigate(['/', 'line']);
  // }

  goToPortfolio() {
    this.router.navigate(['/', 'Portfolio']);
  }
}
