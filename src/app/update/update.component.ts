import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meeting } from '../meeting';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  currUpdateId!: number
  currIdx!: number
  currMeeting!: Meeting
  meetings!: Meeting[]

  public id!: number
  public startTime!: string
  public endTime!: string
  public date!: string
  public title!: string
  public desc!: string
  
  constructor(
    private meetService: MeetingService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }
    
    ngOnInit(): void {
      this.meetService.getAllMeetings().subscribe(
        (meetings: Meeting[]) => {
          this.meetings = meetings,
          this.activatedRoute.paramMap.subscribe(params => {
            this.currUpdateId = parseInt(params.get('id')!)
            this.currIdx = this.meetings.findIndex((object) => {
              return object.id == this.currUpdateId
            })
            this.currMeeting = meetings[this.currIdx]
          })
        }
      );
    }

    month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

    public changeDateFormat(date:any){
      var od = new Date(date)
      var nd = od.getDate() + " " + this.month[od.getMonth()] + " " + od.getFullYear()
      return nd
    }

    editForm(){
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
      const newMeeting: Meeting = {
        id: this.currUpdateId,
        startTime: this.startTime,
        endTime: this.endTime,
        date: this.changeDateFormat(this.date),
        title: this.title,
        desc: this.desc,
      }
      this.meetings[this.currIdx] = newMeeting
      alert("Meeting berhasil diedit!")
      this.router.navigate(['/view_meetings'])
    }
    
}
