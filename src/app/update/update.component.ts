import { Component, OnInit } from '@angular/core';
import { Meeting } from '../meeting';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  currUpdateId = this.meetService.getCurrUpdateId()
  meetings!: Meeting[]
  
  constructor(private meetService: MeetingService) { }

  ngOnInit(): void {
    this.meetService.getAllMeetings().subscribe(
      (meetings: Meeting[]) => {
        this.meetings = meetings
      }
    );
  }

}
