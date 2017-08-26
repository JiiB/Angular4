import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: any;

  constructor(private http:Http){
    this.http.get('http://192.168.1.127/data.php').subscribe((res:Response) => {
      this.data = res.json();
      console.log(this.data);
    })
  }
}
