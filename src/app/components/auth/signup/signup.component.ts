import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { IAuth } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  auth: IAuth = {
    username: "",
    email: "",
    password: "",
    role: 0
  }
  constructor(
    private authServices: AuthService,
    private router: Router,
    private notification: NzNotificationService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authServices.signup(this.auth).subscribe(data => {
      console.log(data);
      this.notification.create(
        "success",
        "Đăng ký thành công",
        "Đăng ký thành công vui lòng đăng nhập"
      )
      this.router.navigateByUrl('/signin')
    })
  }
}
