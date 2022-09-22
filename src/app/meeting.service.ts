import { Injectable } from '@angular/core';
import {of, BehaviorSubject, Observable} from 'rxjs'
import { Meeting } from './meeting';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private apiServerUrl = environment.apiBaseUrl;

  // private meetings: BehaviorSubject<Meeting[]> = new BehaviorSubject<Meeting[]>([
    // {id:1, startTime:'10:00', endTime:'11:30', date:'2022-01-11', title: 'Meet 1', desc: 'This is first meet'},
    // {id:2, startTime:'11:00', endTime:'11:30', date:'2022-08-12', title: 'Meet 2', desc: 'This is second meet'},
    // {id:3, startTime:'12:00', endTime:'13:30', date:'2022-05-13', title: 'Meet 3', desc: 'This is third meet'},
    // {id:4, startTime:'15:00', endTime:'16:30', date:'2022-12-11', title: 'Meet 4', desc: 'This is fourth meet'},
    // {id:5, startTime:'10:00', endTime:'11:30', date:'2022-07-14', title: 'Meet 5', desc: 'This is fifth meet'},
    // {id:6, startTime:'11:30', endTime:'16:30', date:'2022-05-13', title: 'Meet 6', desc: 'This is sixth meet'}
  // ])
  // private currId = this.getMeetingsLength()

  constructor(private http: HttpClient) { }

  public getAllMeetings(): Observable<Meeting[]> {
    // return this.meetings;
    return this.http.get<Meeting[]>(`${this.apiServerUrl}/meeting/all`);
  }

  public addMeeting(newMeeting: any) {
    // this.meetings.next(newMeeting);
    return this.http.post<Meeting[]>(`${this.apiServerUrl}/meeting/add`, newMeeting);
  }

  public updateMeeting(currMeeting: any, id: number) {
    return this.http.put(`${this.apiServerUrl}/meeting/update/${id}`, currMeeting);
  }

  public deleteMeeting(id: number) {
    return this.http.delete(`${this.apiServerUrl}/meeting/delete/${id}`);
  }

  public getMeetingsLength() : any {
    // return this.meetings.value.length
    return this.http.get(`${this.apiServerUrl}/meeting/get/length`);
  }

  public getCurrId() : any {
    // return this.currId
    return this.http.get(`${this.apiServerUrl}/meeting/get/index`);
  }
}
