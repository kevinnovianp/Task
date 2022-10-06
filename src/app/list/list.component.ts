import { Component, OnInit } from '@angular/core';
import { Meeting } from '../meeting';
import { MeetingService } from '../meeting.service';
import Swal from 'sweetalert2';

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
  selectedSort = "oldest"

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
    Swal.fire({
      title: 'Success',
      text: 'Meeting berhasil dihapus!',
      icon: 'success'
    }).then((result) => {
      if (result.isConfirmed) {
        location.pathname = ('/view_meetings')
      }
    })
    // alert("Meeting berhasil dihapus!")
    // location.pathname = ('/view_meetings')
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

    public searchEmployees(key: string): void {
      // console.log(key);
      const results: Meeting[] = [];
      for (const m of this.meetings) {
        if (m.id.toString().toLowerCase().indexOf(key.toLowerCase()) !== -1
        || m.title?.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
          results.push(m);
        }
      }
      this.meetings = results;
      if (!key) {
        this.ngOnInit();
      }
    }

    public sortMeeting(key: string):void {
      const allMeetings: Meeting[] = this.meetings;
      this.selectedSort = key
      switch(key){
        case "newest":{
          this.meetings.sort((a, b) => (a.id > b.id) ? -1 : 1);
          break;
        }
        case "oldest":{
          this.meetings.sort((a, b) => (a.id < b.id) ? -1 : 1);
          break;
        }
        case "title":{
          this.meetings.sort((a, b) => (a.title < b.title) ? -1 : 1);
          break;
        }
        case "date":{
          this.meetings.sort((a, b) => (a.date < b.date) ? -1 : 1);
          break;
        }
      }
    }
}
