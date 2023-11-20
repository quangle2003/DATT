import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuth } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = `http://localhost:3001/`

  constructor(
    private http: HttpClient
  ) { }
  
  signup(user:IAuth): Observable<IAuth>{
    return this.http.post<IAuth>(`http://localhost:3001/signup`, user)
  }
  signin(user:IAuth): Observable<IAuth>{
    return this.http.post<IAuth>(`http://localhost:3001/signin`, user)
  }
  getListAuth(): Observable<IAuth[]>{
    return this.http.get<IAuth[]>(`http://localhost:3001/users`)
  }
  getAuth(id:any): Observable<IAuth>{
    return this.http.get<IAuth>(`http://localhost:3001/users/${id}`)
  }
  createAuth(user:IAuth):Observable<IAuth>{
    return this.http.post<IAuth>(`http://localhost:3001/users`, user)
  }
  removeAuth(id:any):Observable<IAuth>{
    return this.http.delete<IAuth>(`http://localhost:3001/users/${id}`)
  }
  editAuth(user:IAuth): Observable<IAuth>{
    return this.http.put<IAuth>(`http://localhost:3001/users/${user.id}`, user)
  }
}
