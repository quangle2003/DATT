import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBlog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';
import * as dayjs from "dayjs"

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog!: IBlog
  constructor(
    private blogServices : BlogService,
    private ActiveRoute : ActivatedRoute
  ) {
    const id = this.ActiveRoute.snapshot.paramMap.get("id")
    this.blogServices.getBlog(id).subscribe(data => {
       data.createAt = dayjs(data.createAt).format("YYYY")
      this.blog = data
    })
   }

  ngOnInit(): void {
  }

}
