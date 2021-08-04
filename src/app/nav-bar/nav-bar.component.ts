import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../nav-bar.service';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public nav: NavBarService, private observer:BreakpointObserver) { }

  ngOnInit(): void {
  }

}
