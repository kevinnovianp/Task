import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../meeting.service';
import { Meeting } from '../meeting';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

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
  public creatorId!: number
  meetings!: Meeting[]

  constructor(
    private meetService: MeetingService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getCreatorId().subscribe(
      (creatorId: number) => {
        this.creatorId = creatorId;
      }
    );
    this.meetService.getAllMeetings().subscribe(
      (meetings) => {
        this.meetings = meetings
      }
    );
  }

  submitForm(){
    if(!this.title){
      Swal.fire({
        title: 'Error',
        text: 'Judul meeting harus diisi!',
        icon: 'error'
      })
      // alert("Judul meeting harus diisi!")
      return
    }
    if(!this.date){
      Swal.fire({
        title: 'Error',
        text: 'Tanggal meeting harus diisi!',
        icon: 'error'
      })
      // alert("Tanggal meeting harus diisi!")
      return
    }
    if(!this.startTime || !this.endTime){
      Swal.fire({
        title: 'Error',
        text: 'Rentan meeting harus diisi!',
        icon: 'error'
      })
      // alert("Rentan waktu meeting harus diisi!")
      return
    }
    if(!this.desc){
      Swal.fire({
        title: 'Error',
        text: 'Deskripsi meeting harus diisi!',
        icon: 'error'
      })
      // alert("Deskripsi meeting harus diisi!")
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
      creator: this.creatorId
    }
    // this.meetService.addMeeting(newMeeting);
    this.meetService.addMeeting(newMeeting).subscribe(
      (meetings) => {
        this.meetings = meetings
      }
    )
    // this.meetings.push(newMeeting)
    Swal.fire({
      title: 'Success',
      text: 'Meeting berhasil ditambahkan!',
      icon: 'success'
    }).then((result) => {
      if (result.isConfirmed) {
        location.pathname = ('/view_meetings')
      }
    })
    // alert("Meeting berhasil ditambahkan!")
    // this.router.navigate(['/view_meetings'])
  }

}
