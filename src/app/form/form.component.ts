import { Component, OnInit } from '@angular/core';
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

  // public id!: number
  // public startTime!: string
  // public endTime!: string
  // public date!: string
  // public title!: string
  // public desc!: string

  constructor() { }

  currId=1
  newMeet=new Meeting()
  month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

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

  submitForm(){
    this.newMeet.id = this.currId++

    alert(this.newMeet.id + "; " + this.newMeet.title + "; " + this.changeDateFormat(this.newMeet.date) + "; "+ this.changeTimeFormat(this.newMeet.startTime) + " s/d " + this.changeTimeFormat(this.newMeet.endTime) + "; " + this.newMeet.desc)
    location.pathname = ('/view_meetings');
  }

  ngOnInit(): void {
  }

}
