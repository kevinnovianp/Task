import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username!: string
  public password!: string
  users!: User[]
  public currIdLogin!: number

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getIdCurrUser().subscribe(
      (currIdLogin: number) => {
        this.currIdLogin = currIdLogin
      }
    );
  }

  public login(): void{
    if(!this.username){
      Swal.fire({
        title: 'Error',
        text: 'Username harus diisi!',
        icon: 'error'
      })
      return
    }
    if(!this.password){
      Swal.fire({
        title: 'Error',
        text: 'Password harus diisi!',
        icon: 'error'
      })
      return
    }

    // var ctr = 0;
    // if(ctr === 0){
    //   Swal.fire({
    //     title: 'Error',
    //     text: 'Data user tidak ditemukan!',
    //     icon: 'error'
    //   })
    //   return
    // }

    const credentials: User = {
      id: 0,
      username: this.username,
      password: this.password
    }

    this.authService.login(credentials).subscribe((token)=>{
      if(token){
        Swal.fire({
          title: 'Success',
          text: 'Login Berhasil!',
          icon: 'success'
        }).then((result) => {
          if (result.isConfirmed) {
            this.userService.setIdCurrUser(1).subscribe();
            location.pathname = ('/view_meetings')
          }
        })
      }
      else{
        Swal.fire({
          title: 'Error',
          text: 'Invalid Credential!',
          icon: 'error'
        })
      }
    });

  }
}
