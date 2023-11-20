import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http : HttpClient
  ) { }

  getAllProject(): Observable<IProject[]> {
    return this.http.get<IProject[]>(`http://localhost:3001/projects`)
  }
  getProject(id: any): Observable<IProject> {
    return this.http.get<IProject>(`http://localhost:3001/projects/${id}`)
  }
  createProject(project: IProject): Observable<IProject> {
    return this.http.post<IProject>(`http://localhost:3001/projects`,project)
  }
  editProject(project: IProject): Observable<IProject> {
    return this.http.put<IProject>(`http://localhost:3001/projects/${project.id}`,project)
  }
  removeProject(id: any): Observable<IProject> {
    return this.http.delete<IProject>(`http://localhost:3001/projects/${id}`)
  }
}
