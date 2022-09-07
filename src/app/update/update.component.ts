import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meeting } from '../meeting';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  // currUpdateId = this.meetService.getCurrUpdateId()
  currUpdateId!: number
  meetings!: Meeting[]
  
  
  constructor(
    private meetService: MeetingService,
    private activatedRoute: ActivatedRoute
    ) { }
    
    ngOnInit(): void {
      this.meetService.getAllMeetings().subscribe(
        (meetings: Meeting[]) => {
          this.meetings = meetings,
          this.activatedRoute.paramMap.subscribe(params => {
            this.currUpdateId = parseInt(params.get('id')!)
          })
        }
      );
    }
      
}
