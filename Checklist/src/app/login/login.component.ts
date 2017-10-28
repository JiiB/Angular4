import { Component } from '@angular/core';
import {AuthService} from '../providers/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
private userDetails;
  constructor(public authService: AuthService) { }

  login() {
  this.authService.login();
  }
  logout() {
    this.authService.logout();
  }

}
