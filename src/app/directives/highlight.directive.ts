import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() in = 'red';
  @Input() out = 'yellow';
  @HostBinding('style.backgroundColor') bgc = this.out;
  constructor() { }
  @HostListener('mouseenter') mouseenter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave') mouseleave() {
    this.bgc = this.out;
  }
}
