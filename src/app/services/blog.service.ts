import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private http : HttpClient
  ) { }

  getallBlog(): Observable<IBlog[]>{
    return this.http.get<IBlog[]>(`http://localhost:3001/blogs`)
  }
   getBlog(id: any): Observable<IBlog>{
    return this.http.get<IBlog>(`http://localhost:3001/blogs/${id}`)
  }
}
