import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(
      (data) => {console.log(data); }
    );
  }

}
