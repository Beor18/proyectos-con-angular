import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  isOn = false;
  
  get message() {
    return `El test es ${this.isOn ? 'On' : 'Off'}`;
  }

  clicked() {
    this.isOn = !this.isOn;
  }

}
