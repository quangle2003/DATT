import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts!: IPost[]
  constructor(
    private postSerives : PostService
  ) { }

  ngOnInit(): void {
    this.getPost()
  }

  getPost(){
    this.postSerives.postList().subscribe(data => {
      this.posts = data
    })
  }
}
