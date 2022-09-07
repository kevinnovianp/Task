import { Injectable } from '@angular/core';
import {of, BehaviorSubject, Observable} from 'rxjs'
import { Meeting } from './meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  private meetings: BehaviorSubject<Meeting[]> = new BehaviorSubject<Meeting[]>([
    {id:1, startTime:'10:00', endTime:'11:30', date:'11 Jan 2022', title: 'Meet 1', desc: 'This is first meet'},
    {id:2, startTime:'11:00', endTime:'11:30', date:'12 Aug 2022', title: 'Meet 2', desc: 'This is second meet'},
    {id:3, startTime:'12:00', endTime:'13:30', date:'13 May 2022', title: 'Meet 3', desc: 'This is third meet'},
    // {id:4, startTime:'15:00', endTime:'16:30', date:'11 Dec 2022', title: 'Meet 4', desc: 'This is fourth meet'},
    // {id:5, startTime:'10:00', endTime:'11:30', date:'14 Jul 2022', title: 'Meet 5', desc: 'This is fifth meet'},
    // {id:6, startTime:'11:30', endTime:'16:30', date:'13 May 2022', title: 'Meet 6', desc: 'This is sixth meet'}
  ])
  private currId = 3

  constructor() { }

  getAllMeetings(): Observable<Meeting[]> {
    return this.meetings;
  }

  pushMeeting(newMeeting: any) {
    this.meetings.next(newMeeting);
  }

  getCurrId() {
    return this.currId
  }

  setCurrId(num: number){
    this.currId+=num
  }
}
