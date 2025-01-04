import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements AfterViewInit {
  ngAfterViewInit() {
  }

  toggled: { [key: string]: boolean } = {};

  toggleDropdown(id: string) {
    this.toggled[id] = !this.toggled[id];
  }
}
