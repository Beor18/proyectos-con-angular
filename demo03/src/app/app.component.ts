import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  responses: any;
  data: any;
  respuesta = [];
  constructor(private api: ApiService) {
    this.data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'April', 'Mayo', 'Junio', 'Julio'],
      datasets: [
          {
              label: 'Primer dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#4bc0c0'
          },
          {
              label: 'Segundo dataset',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#565656'
          }
      ]
    };
  }

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
