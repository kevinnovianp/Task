import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public id!: number
  public username!: string
  public pass!: string

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm():void{
    location.pathname = ('/view_meetings')
  }
}
