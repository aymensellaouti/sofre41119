import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'sofrecom-second',
  template: `
    <p (click)="sendEventWithData()">
      second works! ma couleur est {{maCouleur}}
    </p>
  `,
  styles: []
})
export class SecondComponent implements OnInit {
  @Input() maCouleur = 'yellow';
  @Output() sendDataToFather = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  sendEventWithData() {
    this.sendDataToFather.emit(
      'Hello From Son'
    );
  }
}
