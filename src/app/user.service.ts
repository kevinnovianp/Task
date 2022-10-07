import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user/all`);
  }

  public addUser(newUser: any) {
    return this.http.post<User[]>(`${this.apiServerUrl}/user/add`, newUser);
  }

  public setIdCurrUser(id: number): any {
    return this.http.get(`${this.apiServerUrl}/user/setIdLogin/${id}`);
  }

  public getIdCurrUser(): any {
    return this.http.get(`${this.apiServerUrl}/user/getIdLogin`);
  }
}
