import { Component, OnInit } from '@angular/core';
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
  memoriaDisponible: any;
  respuesta = [];
  constructor(private api: ApiService) {
    this.getChart();
  }

  ngOnInit() {
    this.getHotels();
    this.getUltimoHotel();
    this.getMemoryDisponible();
  }

  getHotels() {
    this.api.getHoteles().subscribe((response) => {
      this.responses = response;
    });
  }

  getUltimoHotel() {
    this.api.getUltimoHotel().subscribe((respuesta) => {
      this.respuesta = respuesta;
    });
  }

  getMemoryDisponible() {
    this.api.getMemDisponible().subscribe((memoriaDisponible) => {
      this.memoriaDisponible = memoriaDisponible;
    });
  }

  getChart() {
    this.api.getMemBuffered().subscribe((memBuffere) => {
      this.data = {
        labels: ['Disponible en KiB', 'Memoria Buffered'],
        datasets: [
            {
                label: 'Primer dataset',
                data: [this.memoriaDisponible, memBuffere ],
                fill: false,
                borderColor: '#4bc0c0'
            }
        ]
      };
    });
  }

}
