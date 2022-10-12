import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Token } from './token';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  login(user: User) {
    return this.http.post<any>('http://localhost:8080/authenticate', user).pipe(
      tap((token: Token) => this.doLoginUser(user.username, token)),
      map(() => true),
      catchError(
        (error: any) => {
          return of(false);
        }
      )
    );
  }

  isLoggedIn() {
    if(this.getToken() !== "undefined" && this.getToken() !== null){
      console.log(this.getToken());
      return true;
    }else {
      return false;
    }
  }

  doLoginUser(username: string, token: Token) {
    this.storeToken(token);
    console.log(this.getToken());
  }

  storeToken(token: Token){
    localStorage.setItem(this.JWT_TOKEN, token.jwtToken);
  }

  logout(){
    if(this.isLoggedIn()){
      this.removeToken();
      Swal.fire({
        title: 'Success',
        text: 'Logout Berhasil!',
        icon: 'success'
      }).then((result) => {
        if (result.isConfirmed) {
          location.pathname = ('/login')
        }
      })
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Logout Gagal!',
        icon: 'error',
      })
    }
  }

  removeToken(){
    localStorage.removeItem(this.JWT_TOKEN);
  }

  getToken(){
    return localStorage.getItem(this.JWT_TOKEN);
  }
}
