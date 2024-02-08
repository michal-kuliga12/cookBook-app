import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { AccountService } from './services/account.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private path: string = '';

  constructor(
    private router: Router,
    private location: Location,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.setCurrentUser();
    this.getPath();
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');

    if (!userString) return;

    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }

  getPath() {
    const routerSubscribtion = this.router.events.subscribe(
      (routerEvent: Event) => {
        if (routerEvent instanceof NavigationEnd) {
          this.path = this.location.path();
        }
      }
    );
  }

  checkForPathWithNoNavbar() {
    return this.path == '/login' ? false : true;
  }
}
