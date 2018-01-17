import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material';
import { AuthService } from '../../core/auth.service';


@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.css']
})
export class HeaderToolbarComponent implements OnInit {

  @ViewChild('start') sidenav: MatSidenav;
  constructor(public auth: AuthService) {

  }

  ngOnInit() {
  }

  onResize($event) {
    if ($event.target.innerWidth <= 799) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
  }
}
