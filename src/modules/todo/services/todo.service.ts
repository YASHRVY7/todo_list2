import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.module';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private baseUrl = `${environment.apiUrl}/todos`;

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  addTodo(todo: Partial<Todo>): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, todo);
  }

  updateTodo(id: number, todo: Partial<Todo>): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, todo);
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  toggleComplete(id: number, completed: boolean): Observable<Todo> {
    return this.http.patch<Todo>(`${this.baseUrl}/${id}`, { completed });
  }
}