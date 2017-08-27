import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ScannedDocsService {

  private _url = 'http://192.168.1.127/data.php';
  constructor(private _http: Http) { 
  }

  getDocs() {
    return this._http.get(this._url)
      .map((response : Response ) => response.json());
  }

}
