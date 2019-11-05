import { Component, OnInit } from '@angular/core';
import {Personne} from '../Model/personne';
import {LoggerService} from '../../services/logger.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne;
  constructor(
    private loggerService: LoggerService
  ) { }

  ngOnInit() {
    this.loggerService.logger('CC je suis le cvComponent');
  }
  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }

}
