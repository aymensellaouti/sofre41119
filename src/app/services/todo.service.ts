import { Injectable } from '@angular/core';
import {Todo} from '../Model/todo';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  constructor(
    private loggerService: LoggerService
  ) { }
  loggerTodo(): void {
    this.loggerService.logger(this.todos);
  }
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo): number {
    const index = this.todos.indexOf(todo);
    if (index >= 0) {
      this.todos.splice(index, 1);
    }
    return index;
  }
  getTodos(): Todo[] {
    return this.todos;
  }
}
