import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public id!: number
  public username!: string
  public password!: string
  users!: User[]
  public currIdLogin!: number

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getIdCurrUser().subscribe(
      (currIdLogin: number) => {
        this.currIdLogin = currIdLogin
      }
    );
  }

  public login():void{
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
}
