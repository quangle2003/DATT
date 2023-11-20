import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(
    private authServices: AuthService,
    private router: Router,
    private notification: NzNotificationService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formAuth: NgForm){
    this.authServices.signin(formAuth.value).subscribe(data => {
      localStorage.setItem("user",JSON.stringify(data))
      this.notification.create(
        "success",
        "Đăng nhập thành công",
        "Đăng nhập thành công"
      )
      this.router.navigateByUrl('/')
    })
  }

}
