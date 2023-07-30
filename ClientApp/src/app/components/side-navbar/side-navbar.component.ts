import { Component, Input } from '@angular/core';
import { faHome, faList, faUtensils } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss'],
})
export class SideNavbarComponent {
  faHome = faHome;
  faList = faList;
  faUtensils = faUtensils;

  @Input('isSidebarOpen') isSidebarOpen: boolean = false;
}
