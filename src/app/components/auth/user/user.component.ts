import { Component, OnInit } from '@angular/core';
import { IAuth } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user!: IAuth[]
  constructor(
    private authServices: AuthService
  ){}

  ngOnInit(): void {
    this.getAuthList()
  }

  getAuthList(){
     this.authServices.getListAuth().subscribe(data => {
      this.user = data      
    })
  }

  onHandleRemove(id: number) {
    const confirm = window.confirm("bạn có chắc muốn xóa")
    if(confirm){
       this.authServices.removeAuth(id).subscribe(()=> {
        this.user = this.user .filter(item => item.id !== id)
    })
    }
  } 
}
