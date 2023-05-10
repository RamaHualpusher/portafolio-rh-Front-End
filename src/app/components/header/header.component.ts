import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

export interface Person {
  id: number;
  name: string;
  lastname: string;
  profession: string;
  alias: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  person: Person | null = null;
  isHeaderModalOpen: boolean = false;

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.person = this._dataService.getData();
  }

  openHeaderModal() {
    this.isHeaderModalOpen = true;
  }

  saveHeaderInfo(newPerson: Person) {
    if (this.person) {
      this.person = newPerson;
    }
    this.isHeaderModalOpen = false;
  }

  closeModal() {
    this.isHeaderModalOpen = false;
  }
}
