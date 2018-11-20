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
  hotels: any;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getHotels();
  }

  getHotels() {
    this.api.getHoteles().subscribe(hotels => this.hotels = hotels['hotels']);
}

}
