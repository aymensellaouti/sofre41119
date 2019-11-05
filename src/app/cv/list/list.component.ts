import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../Model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  @Output() selectPersonneFromItem = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'sellaouti','aymen',37,7777,'Teacher', 'as.jpg'),
      new Personne(2, 'sellaouti','skander',1,88888,'kid', ''),
      new Personne(2, 'sellaouti','skander',1,88888,'kid', '     '),
    ];
  }
  sendPersonneToCv(personne: Personne) {
    this.selectPersonneFromItem.emit(
      personne
    );
  }

}
