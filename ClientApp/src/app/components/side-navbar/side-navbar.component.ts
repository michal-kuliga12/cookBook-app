import { Component, Input } from '@angular/core';
import {
  IconDefinition,
  faHome,
  faList,
  faPaintBrush,
  faPalette,
  faSearch,
  faStar,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss'],
})
export class SideNavbarComponent {
  public navElements: navElement[] = [
    { icon: faHome, textContent: 'Strona główna' },
    { icon: faSearch, textContent: 'Wyszukaj przepis' },
    { icon: faList, textContent: 'Polecane przepisy' },
    { icon: faUtensils, textContent: 'Moje przepisy' },
    { icon: faStar, textContent: 'Ulubione' },
    { icon: faPalette, textContent: 'Zmień motyw' },
  ];
  @Input('isSidebarOpen') isSidebarOpen: boolean = false;
}

interface navElement {
  icon: IconDefinition;
  textContent: string;
}
