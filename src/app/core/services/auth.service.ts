import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  register(model:any) {
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((res:any) => {
        if(res) {
          this.setCurrentUser(res);
        }
        return res;
      })
    )
  }

  login(model:any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((res: any) => {
        const user : User = res;
        if(user) {
          this.setCurrentUser(user);
        }
        return res;
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }

  setCurrentUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  getDecodedToken(token) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  getProtectedResource() {
    return this.http.get(this.baseUrl + 'account/protected-resource');
  }
}
