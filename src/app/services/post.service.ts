import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API_URL = `http://localhost:3001/posts/`

  constructor(
    private http :HttpClient
  ) { }

  postList(): Observable<IPost[]>{
    return this.http.get<IPost[]>(`http://localhost:3001/posts`)
  }
}
