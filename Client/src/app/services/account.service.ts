import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, map } from 'rxjs';
import { UserLogin } from '../models/userLogin.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private baseUrl: string = environment.apiUrl;
  private currentUserSource = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) {}

  login(user: UserLogin) {
    return this.http
      .post<UserLogin>(this.baseUrl + '/account/login', user)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSource.next(user);
          }
        })
      );
  }

  register(user: UserLogin) {
    return this.http.post<User>(this.baseUrl + '/account/register', user).pipe(
      map((response) => {
        const user = response;
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }
}
