import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../Model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Output() sendPersonne = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectPersonne() {
    // je vais emmetre un evenement qui contient ma personne
    this.sendPersonne.emit(
      this.personne
    );
  }

}
