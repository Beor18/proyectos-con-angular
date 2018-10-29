import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo01';
  users: any[] = [];

  constructor(protected userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(
      (data) => {
        this.users = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
