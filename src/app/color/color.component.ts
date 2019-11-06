import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers: [TodoService]
})
export class ColorComponent implements OnInit {
  defaultColor = 'red';
  color: string;
  constructor(
    private todoService: TodoService
  ) {
    this.color = this.defaultColor;
  }

  ngOnInit() {
  }

  changeColor(inputColor) {
    this.color = inputColor;
  }
  resetColor() {
    this.color = this.defaultColor;
    this.todoService.loggerTodo();
  }
}
