import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpService {
  constructor(private http: Http) { }
  sendData(name: any){
    const body = JSON.stringify(name);
    const headers =  new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://192.168.1.127/rename.php', body, {headers: headers});
  }
}
