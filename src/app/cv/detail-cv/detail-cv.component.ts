import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.cvService.findPersonneById(params.id).subscribe(
          (personne) => {this.personne = personne; },
          (error) => {this.router.navigate(['cv']); }
        );
      }
    );
  }
  deletePersonne() {
    this.cvService.deletePersonneById(this.personne.id).subscribe(
      (resonse) => this.router.navigate(['cv']),
      (erreur) => {
        console.log(erreur);
      }
    );
  }

}
