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

  public id!: number
  public startTime!: string
  public endTime!: string
  public date!: string
  public title!: string
  public desc!: string

  constructor() { }

  currId=1
  // newMeet=new Meeting()

  submitForm(){
    this.id = this.currId++
    alert(this.id + "; " + this.title + "; " + this.date + "; "+ this.startTime + " s/d " + this.endTime + "; " + this.desc)
    location.pathname = ('/view_meetings');
  }

  ngOnInit(): void {
  }

}
