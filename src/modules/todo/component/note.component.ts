import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.module';

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
    MatCheckboxModule
  ],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  todos: Todo[] = [];
  newTodo = '';
  editingIndex: number | null = null;
  editedText = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        this.todos = todos;
        this.errorMessage = '';
      },
      error: (error) => {
        this.errorMessage = 'Failed to load todos. Please try again.';
        this.successMessage = '';
        console.error('Error loading todos:', error);
      }
    });
  }

  addTodo() {
    const trimmedTodo = this.newTodo.trim();
    if (!trimmedTodo) {
      this.errorMessage = 'Todo cannot be empty!';
      this.successMessage = '';
      return;
    }

    this.todoService.addTodo({ text: trimmedTodo }).subscribe({
      next: () => {
        this.successMessage = 'Todo added successfully!';
        this.errorMessage = '';
        this.newTodo = '';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
        this.loadTodos();
      },
      error: () => {
        this.errorMessage = 'Failed to add todo, please try again.';
        this.successMessage = '';
        console.error('Error adding todo');
      }
    });
  }

  deleteTodo(id: number) {
    const confirmed = confirm('Are you sure you want to delete this todo?');
    if (confirmed) {
      this.todoService.deleteTodo(id).subscribe({
        next: () => {
          this.successMessage = 'Todo deleted successfully!';
          this.errorMessage = '';
          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
          this.loadTodos();
        },
        error: () => {
          this.errorMessage = 'Failed to delete todo.';
          this.successMessage = '';
        }
      });
    }
  }

  startEdit(index: number) {
    this.editingIndex = index;
    this.editedText = this.todos[index].text;
  }

  saveEdit(index: number) {
    const trimmedText = this.editedText.trim();
    if (!trimmedText) {
      this.errorMessage = 'Todo text cannot be empty!';
      this.successMessage = '';
      return;
    }
    
    const updatedTodo = { ...this.todos[index], text: trimmedText };
    this.todoService.updateTodo(this.todos[index].id, updatedTodo).subscribe({
      next: () => {
        this.todos[index] = updatedTodo;
        this.cancelEdit();
        this.successMessage = 'Todo updated successfully!';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      error: (error) => {
        this.errorMessage = error.error || 'Failed to update todo';
        this.successMessage = '';
        console.error('Error updating todo:', error);
      }
    });
  }

  cancelEdit() {
    this.editingIndex = null;
    this.editedText = '';
  }

  clearError() {
    this.errorMessage = '';
  }

  toggleComplete(todo: Todo) {
    this.todoService.toggleComplete(todo.id, !todo.completed).subscribe(() => this.loadTodos());
  }
}
