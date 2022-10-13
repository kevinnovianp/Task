import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLoggedIn: boolean

  constructor(
    private userService: UserService,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn =  this.authService.isLoggedIn();
  }

  logout(): void{
    this.authService.logout();
  }
}
