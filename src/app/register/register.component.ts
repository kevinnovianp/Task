import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public id!: number
  public username!: string
  public password!: string
  public confirmPassword!: string
  users!: User[]

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (users) => {
        this.users = users
      }
    )
  }

  public register():void{
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
    if(!this.confirmPassword){
      Swal.fire({
        title: 'Error',
        text: 'Password harus diisi!',
        icon: 'error'
      })
      return
    }
    if(this.password !== this.confirmPassword){
      Swal.fire({
        title: 'Error',
        text: 'Konfirmasi password dan Password harus sama!',
        icon: 'error'
      })
      return
    }

    const newUser: User = {
      id: 0,
      username: this.username,
      password: this.password
    }
    this.userService.addUser(newUser).subscribe(
      (users) => {
        this.users = users
      }
    )

    Swal.fire({
      title: 'Success',
      text: 'Register Berhasil!',
      icon: 'success'
    }).then((result) => {
      if (result.isConfirmed) {
        location.pathname = ('/login')
      }
    })
  }
}
