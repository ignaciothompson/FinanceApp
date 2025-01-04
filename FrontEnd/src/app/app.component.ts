import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainContainerComponent } from './layout/main-container/main-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TopNavbarComponent, MainContainerComponent, CommonModule],
})
export class AppComponent {
  title = 'FinanceApp';
}
