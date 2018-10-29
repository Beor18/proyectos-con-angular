import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
  }
}
