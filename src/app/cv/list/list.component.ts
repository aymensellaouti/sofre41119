import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../Model/personne';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  @Output() selectPersonneFromItem = new EventEmitter();
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit() {
     this.cvService.getPersonnes().subscribe(
       (personnes) => {this.personnes = personnes; },
       (erreur) => {
         this.personnes = this.cvService.getFakeData();
         alert(`Network problem, Exposed data are fake`);
       }
     );
  }
  sendPersonneToCv(personne: Personne) {
    this.selectPersonneFromItem.emit(
      personne
    );
  }

}
