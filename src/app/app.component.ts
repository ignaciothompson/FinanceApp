import { Component } from '@angular/core';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainContainerComponent } from './layout/main-container/main-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TopNavbarComponent, MainContainerComponent],
})
export class AppComponent {
  title = 'FinanceApp';
}
