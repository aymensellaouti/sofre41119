import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Personne} from '../Model/personne';
import {CvService} from '../services/cv.service';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  id;
  personne: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.personne = this.cvService.findPersonneById(params.id);
      }
    );
  }

}
