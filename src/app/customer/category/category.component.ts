import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  project!: IProject
  constructor(
    private projectServices : ProjectService,
    private ActiveRoute : ActivatedRoute
  ) { 
     const id = this.ActiveRoute.snapshot.paramMap.get("id")
     this.projectServices.getProject(id).subscribe(data => {
      this.project = data
     })
  }

  ngOnInit(): void {
  }

}
