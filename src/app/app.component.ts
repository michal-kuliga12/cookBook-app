import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ActivationStart,
  Event,
  NavigationEnd,
  NavigationStart,
  Router,
  RoutesRecognized,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'food-recipes-app';
  path: string = '';
  isNavbarDisplayed: boolean = true;
  constructor(private router: Router, private location: Location) {}
  ngOnInit(): void {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationEnd) {
        this.path = this.location.path();
      }
    });
  }
  showNavbar() {
    if (this.path === '/login') {
      return false;
    } else {
      return true;
    }
  }

  showLoadingIndicator() {}
}
