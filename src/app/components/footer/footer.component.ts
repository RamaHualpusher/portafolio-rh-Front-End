import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  data: any;
  currentYear: number;

  constructor(private _dataService: DataService) {
    this.data = this._dataService.getData();
    this.currentYear = new Date().getFullYear();
  }
}
