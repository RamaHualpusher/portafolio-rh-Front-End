import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  data: any;
  title:String = "";
  constructor(private _dataService: DataService) {
    this.data = this._dataService.getData();
    this.title = this.data[0].persona.name;
  }
}
