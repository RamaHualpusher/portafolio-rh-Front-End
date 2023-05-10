import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

interface PersonAboutme {
  id: number;
  aboutme: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  person: PersonAboutme | null = null;
  isAboutModalOpen: boolean = false;

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.person = this._dataService.getData();
  }

  openAboutModal() {
    this.isAboutModalOpen = true;
  }

  saveAboutInfo(newAboutInfo: string) {
    if (this.person) {
      this.person = {
        id: this.person.id,
        aboutme: newAboutInfo
      };
    }
    this.isAboutModalOpen = false;
  }


  closeModal() {
    this.isAboutModalOpen = false;
  }
}
