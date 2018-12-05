import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Observer, Observable } from 'rxjs';

@Injectable()
export class ApiService {

  private url = 'https://almundo-examen.herokuapp.com';
  private socket;

  constructor() {
    this.socket = socketIo(this.url);
  }

  getHoteles() {
    return Observable.create((observer) => {
      this.socket.on('FromAPI', (response) => {
        observer.next(response);
      });
    });
  }

  getUltimoHotel() {
    return Observable.create((observer) => {
      this.socket.on('FromHotel', (respuesta) => {
        observer.next(respuesta);
      });
    });
  }

  getMemDisponible() {
    return Observable.create((observer) => {
      this.socket.on('memDisponible', (memDisponible) => {
        observer.next(memDisponible);
      });
    });
  }

  getMemBuffered() {
    return Observable.create((observer) => {
      this.socket.on('memBuffered', (memBuffered) => {
        observer.next(memBuffered);
      });
    });
  }

}
