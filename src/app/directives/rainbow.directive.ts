import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective implements OnInit {
  @Input() initColor = 'red';
  @HostBinding('style.color') color ;
  @HostBinding('style.borderColor') bc ;
  constructor() { }
  @HostListener('keyup') changeColor() {
    this.bc = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  ngOnInit(): void {
    this.bc = this.initColor;
  }
}
