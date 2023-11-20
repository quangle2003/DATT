import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects!: IProject[]
  constructor(
    private projectServices: ProjectService
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
