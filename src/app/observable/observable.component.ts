import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {strictEqual} from 'assert';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  imageObservable: Observable<string>;
  path = 'default.png';
  paths = [
    '404.png',
    'as.jpg',
    'cv.png',
    'default.png'
  ]
  constructor() {
  }

  ngOnInit() {
    this.imageObservable = new Observable<string>(
      (observer) => {
        let i = this.paths.length - 1;
        setInterval(
          () => {
            observer.next(this.paths[i--]);
            if (i === -1 ) {
              i = this.paths.length - 1;
            }
          }, 1000
        );
      }
    );
    this.imageObservable.subscribe(
      (path) => {this.path = path; }
    )
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    observable.subscribe((val) => {
      console.log(val);
    },
      (erreur) => {},
      () => {console.log('C\'est la fin :()'); }
      );
    observable.subscribe(
      (val) => {
        console.log( val * 2 );
      },
      (erreur) => {
        console.log(erreur);
      }
    );

  }

}
