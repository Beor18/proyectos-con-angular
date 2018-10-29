import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected http: HttpClient) { }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=25');
  }

}
