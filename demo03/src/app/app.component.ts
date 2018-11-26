import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import {interval } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  responses: any;
  respuesta = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getHotels();
    this.getUltimoHotel();
  }

  getHotels() {
    this.api.getHoteles().subscribe((response) => {
      this.responses = response;
      console.log(this.responses);
    });
  }

  getUltimoHotel() {
    this.api.getUltimoHotel().subscribe((respuesta) => {
      this.respuesta = respuesta;
      console.log(this.respuesta);
    });
  }

}
