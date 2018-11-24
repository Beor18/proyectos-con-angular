import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Observer, Observable } from 'rxjs';

@Injectable()
export class ApiService {

  private url = 'http://localhost:5000';
  private socket;

  constructor() {
    this.socket = socketIo(this.url);
  }

  getHoteles() {
    return Observable.create((observer) => {
      // tslint:disable-next-line:quotemark
      this.socket.on("FromAPI", (response) => {
        observer.next(response);
      });
    });
  }

}
