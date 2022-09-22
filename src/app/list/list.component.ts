import { Component, OnInit } from '@angular/core';
import { Meeting } from '../meeting';
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
        this.meetings = meetings;
        this.meetings.sort((a, b) => (a.id < b.id) ? -1 : 1);
      }
    );
  }

  deleteMeeting(id: any){
    var indexOfObject = this.meetings.findIndex((object) => {
      return object.id == id;
    })
    // this.meetings.splice(indexOfObject, 1);
    this.meetService.deleteMeeting(id).subscribe();
    alert("Meeting berhasil dihapus!")
    location.pathname = ('/view_meetings')
  }

  month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

  public changeDateFormat(date:any){
    var od = new Date(date)
    var nd = od.getDate() + " " + this.month[od.getMonth()] + " " + od.getFullYear()
    return nd
  }

    public changeTimeFormat(time:any){
      var hour = Number(time.substring(0,2))
      var local = hour<12 ? "AM" : "PM"
      hour = hour>12 ? hour-12 : hour
      var minute = Number(time.substring(3,5))
      var nt = String(hour).padStart(2, '0') + ":" + String(minute).padStart(2, '0') + " " + local
      return nt
    }

}
