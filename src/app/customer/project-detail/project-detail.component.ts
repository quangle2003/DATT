import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project!: IProject
  constructor(
    private projectServices : ProjectService,
    private activeRoute : ActivatedRoute
  ) { 
     const id = this.activeRoute.snapshot.paramMap.get("id")
    this.projectServices.getProject(id).subscribe(data => {
      this.project = data
    })
  }
  

  ngOnInit(
  ): void {
  }

 
}
