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

  public getCreatorId() : Observable<number> {
    return this.http.get<number>(`${this.apiServerUrl}/user/getCreatorId`);
  }
}
