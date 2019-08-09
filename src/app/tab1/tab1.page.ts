import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Income } from '../interfaces/interfaces';
import { CrudService } from '../services/crud.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('doughnutCanvas') doughnutCanvas;

  doughnutChart: any;
  incomes: Income[];

  constructor(private authService: AuthService, public router: Router, private crudService: CrudService) {}
  ngOnInit() {
    this.doughnutChartMethod();
    /* this.crudService.getIncomes(); */
  }
  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Ingresos', 'Egresos'],
        datasets: [{
          label: '# of Votes',
          data: [50, 29],
          backgroundColor: [
            'rgba(66, 155, 55, 0.2)',
            'rgba(251, 250, 252, 0.2)'
            
          ],
          hoverBackgroundColor: [
            '#429B37',
            '#FBFAFC'
          ]
        }]
      }
    });
  }
  OnLogout() {
    this.authService.logout();
  }
  onclickEgreso() {
    this.router.navigate(['/reg-egreso']);
  }
  onclickIngreso() {
    this.router.navigate(['/reg-ingreso']);
  }
}
