import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(
    private projectServices: ProjectService,
    private router: Router,
    private notification: NzNotificationService,
    private activeRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSubmit(addProject: NgForm){
   this.projectServices.createProject(addProject.value).subscribe(()=>{
    this.notification.create(
        "success",
        "Thêm thành công",
        "Thêm thành công"
      )
    this.router.navigateByUrl("/admin/project")
   })
  }
}
