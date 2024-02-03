import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  Login(user: UserModel) {
    return this.http.post(this.baseUrl + '/account/login', user);
  }

  Register(user: UserModel) {
    return this.http.post(this.baseUrl + '/account/register', user);
  }
}
