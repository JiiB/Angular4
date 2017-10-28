import { Component } from '@angular/core';
import {AuthService} from '../providers/auth.service';

@Component({
  selector: 'app-component-viewer',
  templateUrl: './component-viewer.component.html',
  styleUrls: ['./component-viewer.component.css']
})
export class ComponentViewerComponent  {

  constructor( private authService: AuthService) {

  }




}
