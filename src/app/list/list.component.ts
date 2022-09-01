import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Meeting } from '../meeting';
import { MEETS } from '../meeting-dump'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  meets = MEETS;
  ctr = MEETS.length==0 ? false:true

  constructor() { }

  ngOnInit(): void {

  }

}
