import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Meeting } from '../meeting';
import { MEETS } from '../meeting-dump'
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor(
    private meetService: MeetingService,
  ) { }

  // meets = MEETS;
  meetings!: Meeting[]

  ngOnInit(): void {
    this.meetService.getAllMeetings().subscribe(
      (meetings: Meeting[]) => {
        this.meetings = meetings
      }
    );
  }

  deleteMeeting(id: any){
    var indexOfObject = this.meetings.findIndex((object) => {
      return object.id == id;
    })
    this.meetings.splice(indexOfObject, 1);
    alert("Meeting berhasil dihapus!")
  }

  setUpdateId(id: any){
    this.meetService.setCurrUpdateId(id)
  }

}
