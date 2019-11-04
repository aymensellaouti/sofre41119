import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  defaultColor = 'red';
  color: string;
  constructor() {
    this.color = this.defaultColor;
  }

  ngOnInit() {
  }

  changeColor(inputColor) {
    this.color = inputColor;
  }
  resetColor() {
    this.color = this.defaultColor;
  }
}
