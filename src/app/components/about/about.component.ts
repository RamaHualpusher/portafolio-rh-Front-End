import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  data: any;
  isEditModalOpen: boolean = false;
  aboutme: string;

  constructor(private _dataService: DataService) {
    this.data = this._dataService.getData();
    this.aboutme = this.data.aboutme;
  }

  openEditModal() {
    this.isEditModalOpen = true;
  }

  saveEditedText(newText: string) {
    this.aboutme = newText;
    this.isEditModalOpen = false;
    console.log(this.data.id)
    console.log(this.aboutme);
    console.log(newText)
  }

  closeModal() {
    this.isEditModalOpen = false;
  }
}
