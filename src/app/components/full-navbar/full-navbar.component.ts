import { Component } from '@angular/core';

@Component({
  selector: 'app-full-navbar',
  templateUrl: './full-navbar.component.html',
})
export class FullNavbarComponent {
  isSidebarOpen: boolean = false;
  retrieveSidebarStatus(status: boolean) {
    this.isSidebarOpen = status;
  }
}
