import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as socketIo from 'socket.io-client';
import { Observer } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  observer: Observer<any>;

  getHoteles() {
    const socket = socketIo('http://localhost:5000/api/hoteles');
    socket.on('data', response => {
      return this.observer.next(response.data);
    });
    return this.createObservable();
  }

  createObservable() {
    return new Observable(observer => this.observer = observer);
  }

}
