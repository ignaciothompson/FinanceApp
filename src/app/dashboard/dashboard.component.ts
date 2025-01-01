import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  onInvestmentScroll(event: WheelEvent): void {
    const container = event.currentTarget as HTMLElement;
    const scrollAmount = event.deltaY * 3; // Adjust the multiplier as needed
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    event.preventDefault();
  }

}
