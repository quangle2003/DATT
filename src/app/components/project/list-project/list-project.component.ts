import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  projects!: IProject[]
  constructor(
    private projectServices : ProjectService
  ) { }

  ngOnInit(): void {
    this.getListProject()
  }

  getListProject(){
    this.projectServices.getAllProject().subscribe((data)=> {
      this.projects = data
    })
  }
  
  onHandleRemove(id:any){
   const confirm = window.confirm("xóa?")
   if(confirm){
     this.projectServices.removeProject(id).subscribe(data => {
      this.projects = this.projects.filter(item => item.id !== id)
    })
   }
  }
}
