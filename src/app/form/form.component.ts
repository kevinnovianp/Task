import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../meeting.service';
import { Meeting } from '../meeting';
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

  constructor(
    private meetService: MeetingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.meetService.getAllMeetings().subscribe(
      (meetings) => {
        this.meetings = meetings
      }
    );
  }

  submitForm(){
    if(!this.title){
      alert("Judul meeting harus diisi!")
      return
    }
    if(!this.date){
      alert("Tanggal meeting harus diisi!")
      return
    }
    if(!this.startTime || !this.endTime){
      alert("Rentan waktu meeting harus diisi!")
      return
    }
    if(!this.desc){
      alert("Deskripsi meeting harus diisi!")
      return
    }

    // this.meetService.setCurrId(1)
    const newMeeting: Meeting = {
      id: 0,
      startTime: this.startTime,
      endTime: this.endTime,
      date: this.date,
      title: this.title,
      desc: this.desc,
    }
    // this.meetService.addMeeting(newMeeting);
    this.meetService.addMeeting(newMeeting).subscribe(
      (meetings) => {
        this.meetings = meetings
      }
    )
    // this.meetings.push(newMeeting)
    alert("Meeting berhasil ditambahkan!")
    location.pathname = ('/view_meetings')
    // this.router.navigate(['/view_meetings'])
  }

}
