import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  projects!: IProject[]
  constructor(
    private projectServices : ProjectService
  ) { }

  ngOnInit(): void {
    this.getAllProject()
  }
   getAllProject() {
    this.projectServices.getAllProject().subscribe(data => {
      this.projects = data
    })
  }

}
