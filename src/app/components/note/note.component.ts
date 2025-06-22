import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TodoService, Todo } from '../../services/todo.service';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css',
})

export class NoteComponent implements OnInit{
  newTodo:string='';
  todos: Todo[] = [];
  errorMessage: string = '';
  successMessage: string = '';

  editingIndex: number | null = null;
  editedText: string = '';


  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();

  }
  loadTodos(){
    this.todoService.getTodo().subscribe((data)=>{
      this.todos = data;
    });
  }

  addTodo(){
    if(!this.newTodo || this.newTodo.trim()===''){
      this.errorMessage='Todo cannot be empty!';
      this.successMessage='';
      return;
    }
    this.todoService.addTodo({text:this.newTodo}).subscribe((todo)=>{
      this.todos.unshift(todo);
      this.newTodo='';
      this.successMessage = 'Todo added successfully!';
      setTimeout(() => (this.successMessage = ''), 2000);
    });
  }
  deleteTodo(index:number){
    const todo=this.todos[index];
    this.todoService.deleteTodo(todo.id!).subscribe(()=>{
      this.todos.splice(index,1);
    })
  }

  startEdit(index:number){
    this.editingIndex=index;
    this.editedText=this.todos[index].text;
  }

  saveEdit(index:number){
    const todo=this.todos[index];
    this.todoService.editTodo(todo.id!,this.editedText).subscribe(()=>{
      todo.text=this.editedText;
      this.cancelEdit();
    })
  }
    cancelEdit() {
    this.editingIndex = null;
    this.editedText = '';
  }
    toggleComplete(todo: Todo) {
    this.todoService.updateTodoCompletion(todo.id!, !todo.completed).subscribe(() => {
      todo.completed = !todo.completed;
    });
  }

}


// export class NoteComponent {
//   newTodo: string = '';
//   todos:{text:string, completed:boolean}[] = [];
//   errorMessage: string = '';
//   successMessage:string='';

//   editingIndex:number|null=null;
//   editedText:string='';


//   addTodo() {
//     if (!this.newTodo || this.newTodo.trim() === '') {
//       this.errorMessage = 'Todo cannot be empty!';
//       this.successMessage = '';
//       return;
//     }
//     this.todos.push({ text: this.newTodo.trim(), completed: false });
//     this.newTodo = '';
//     this.errorMessage = '';
//     this.successMessage = 'Todo added successfully!';

//     setTimeout(()=>{
//       this.successMessage='';
//     },2000);
//   }
//   deleteTodo(index:number){
//     this.todos.splice(index,1);
//     if(this.editingIndex===index){
//     }
//   }

//   startEdit(index:number){
//     this.editingIndex=index;
//     this.editedText=this.todos[index].text;
//   }

//   saveEdit(index:number){
//     if(this.editedText.trim()){
//       this.todos[index].text=this.editedText.trim();
//       this.cancelEdit();

//     }
//   }
//   cancelEdit(){
//     this.editingIndex=null;
//     this.editedText='';
//   }

//   editTodo(index:number){
//     const edited=prompt('Edit your todo:',this.todos[index].text);
//     if (edited !== null && edited.trim() !== ''){
//       this.todos[index].text=edited.trim();
//     }

//   }
//   toggleComplete(todo:{text:string;completed:boolean}){
//     todo.completed=!todo.completed;
//   }
// }
