import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';
import {timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 7777, 'Teacher', 'as.jpg'),
      new Personne(2, 'sellaouti', 'skander', 1, 88888, 'kid', ''),
      new Personne(2, 'sellaouti', 'skander', 1, 88888, 'kid', '     '),
    ];
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }
  findPersonneById(id): Personne {
    return this.personnes.find((personne) => personne.id === +id);
  }
}
