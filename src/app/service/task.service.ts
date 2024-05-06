import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../interfaces/Tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  [x: string]: any;
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }

  getTasks(): Observable <Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTasks(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }

}