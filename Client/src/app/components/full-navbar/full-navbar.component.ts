import { Component } from '@angular/core';

@Component({
  selector: 'app-full-navbar',
  templateUrl: './full-navbar.component.html',
  styleUrls: ['./full-navbar.component.scss'],
})
export class FullNavbarComponent {
  isSidebarOpen: boolean = false;
  retrieveSidebarStatus(status: boolean) {
    this.isSidebarOpen = status;
  }
}
