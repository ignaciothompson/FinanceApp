import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  c: any = {};

  constructor(private dashboardService: DashboardService) {}
  
  ngOnInit(): void {
    this.dashboardService.getDashboardData().subscribe(
      (data) => {
        this.c = data;
        console.log(this.c.accounts[0].name);
      },
      (error) => {
        console.error('Error fetching dashboard data', error);
      }
    );
  }

  onInvestmentScroll(event: WheelEvent): void {
    const container = event.currentTarget as HTMLElement;
    const scrollAmount = event.deltaY * 3;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    event.preventDefault();
  }

}