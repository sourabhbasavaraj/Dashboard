import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavBarService } from '../nav-bar.service';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @ViewChild(MatSidenav) 
  sideNav!:MatSidenav;
  constructor( public nav: NavBarService, private observer:BreakpointObserver) { }

  ngOnInit( ) {
    this.nav.hide();
  }

  ngAfterViewInit(){
    
    this.observer.observe(['(max-width:800px)']).subscribe((res)=>
    {
      if(res.matches){
         this.sideNav.mode = 'over';
         this.sideNav.close();
      }
      else{
         this.sideNav.mode = 'side';
         this.sideNav.open(); 
      }
    }
    )
  }

}
