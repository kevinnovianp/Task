import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // public currIdLogin!: number
  public isLoggedIn: boolean

  constructor(
    private userService: UserService,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    // this.userService.getIdCurrUser().subscribe(
    //   (currIdLogin: number) => {
    //     this.currIdLogin = currIdLogin
    //   }
    // );
    this.isLoggedIn =  this.authService.isLoggedIn();
  }

  logout(): void{
    this.authService.logout();
    this.userService.setIdCurrUser(0).subscribe();
  }
}
