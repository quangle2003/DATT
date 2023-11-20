import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAuth } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: IAuth = {
    username: "",
    email: "",
    password: "",
    role: 0
  }
  authList!: IAuth
  constructor(
    private authService: AuthService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activedRoute.snapshot.paramMap.get("id")
    if(id){
      this.authService.getAuth(id).subscribe(data => this.user = data)
    }
  }
  onSubmit() {
    const id = this.activedRoute.snapshot.paramMap.get("id")
    if(id){
      this.authService.editAuth(this.user).subscribe(data => {
        this.router.navigateByUrl("/user")
      })
    }
    else{
      this.authService.createAuth(this.user).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl("/user")
    })
    }
   
  }
}
