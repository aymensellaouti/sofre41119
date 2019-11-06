import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  hiredList: Personne[] = [];
  constructor() { }
  getHired(): Personne[] {
    return this.hiredList;
  }
  hire(personne: Personne) {
    const index = this.hiredList.indexOf(personne);
    if (index < 0) {
      this.hiredList.push(personne);
    } else {
      alert(`${personne.nom} is already hired`);
    }
  }
}
