import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public currIdLogin!: number

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getIdCurrUser().subscribe(
      (currIdLogin: number) => {
        this.currIdLogin = currIdLogin
      }
    );
  }

  logout(): void{
    Swal.fire({
      title: 'Success',
      text: 'Logout Berhasil!',
      icon: 'success'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.setIdCurrUser(0).subscribe();
        location.pathname = ('/login')
      }
    })
  }
}
