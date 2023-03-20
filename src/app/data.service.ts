import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as data from '../assets/data/data.json';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor() { }

  getData(): any{
    return data;
  }
}
