import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'octal';
  opened = false;

  toggleSidebar(){
    this.opened = !this.opened;
  }
}


