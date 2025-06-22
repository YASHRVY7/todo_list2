import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



export interface Todo{
  id:number;
  text:string;
  completed:boolean;
}
@Injectable({
  providedIn: 'root'
})

export class TodoService {
  private apiUrl='http://localhost:3000/todos';
  constructor(private http: HttpClient) {}

  getTodo():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.apiUrl);
  }

  addTodo(todo:Partial<Todo>):Observable<Todo>{
    return this.http.post<Todo>(this.apiUrl,todo);
  }

  updateTodoCompletion(id:number,completed:boolean):Observable<void>{
    return this.http.put<void>(`${this.apiUrl}/${id}`, { completed });
  }

  editTodo(id: number, text: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/edit/${id}`, { text });
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
