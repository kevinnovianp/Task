import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MeetingService } from '../meeting.service';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, FormGroup } from '@angular/forms';
import { Meeting } from '../meeting';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent implements OnInit {

  public id!: number
  public startTime!: string
  public endTime!: string
  public date!: string
  public title!: string
  public desc!: string
  meetings!: Meeting[]

  constructor(private meetService: MeetingService) { }

  ngOnInit(): void {
    this.meetService.getAllMeetings().subscribe(
      (meetings) => {
        this.meetings = meetings
      }
    );
  }

  month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

  public changeDateFormat(date:any){
    var od = new Date(date)
    var nd = od.getDate() + " " + this.month[od.getMonth()] + " " + od.getFullYear()
    return nd
  }

  // public changeTimeFormat(time:any){
  //   var hour = Number(time.substring(0,2))
  //   var local = hour<12 ? "AM" : "PM"
  //   hour = hour>12 ? hour-12 : hour
  //   var minute = Number(time.substring(3,5))
  //   var nt = String(hour).padStart(2, '0') + ":" + String(minute).padStart(2, '0') + " " + local
  //   return nt
  // }

  submitForm(){
    this.meetService.setCurrId(1)
    const newMeeting: Meeting = {
      id: this.meetService.getCurrId(),
      startTime: this.startTime,
      endTime: this.endTime,
      date: this.changeDateFormat(this.date),
      title: this.title,
      desc: this.desc,
    }
    this.meetings.push(newMeeting)
    // this.meetService.pushMeeting(newMeeting)
    alert("Meeting berhasil ditambahkan!")
    // location.pathname = ('/view_meetings');
  }

}
