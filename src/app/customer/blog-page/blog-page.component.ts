import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blogs!:IBlog[]
  constructor(
    private blogServices: BlogService
  ) { }

  ngOnInit(): void {
    this.getBlog()
  }

  getBlog(){
    this.blogServices.getallBlog().subscribe(data => {
      this.blogs = data
    })
  }

}
