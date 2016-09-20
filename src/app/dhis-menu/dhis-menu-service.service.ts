import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Constants} from '../shared/costants';
import 'rxjs/Rx';

@Injectable()
export class DhisMenuService {

  constructor(private dhisCostant: Constants, private http: Http) {

  }

  // Get system wide settings
  getData () {
    return this.http.get(this.dhisCostant.root_dir + 'api/systemSettings.json')
        .map((response: Response) => response.json());
  }

  // Get User Specific Settings
  getUserData () {
    return this.http.get(this.dhisCostant.root_dir + 'api/userSettings.json')
        .map((response: Response) => response.json());
  }

}
