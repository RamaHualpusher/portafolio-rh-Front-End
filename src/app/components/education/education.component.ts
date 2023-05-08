// education.component.ts
import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education: any[];
  isEducationModalOpen: boolean = false;
  selectedEducation: any = null;

  constructor(private _dataService: DataService) {
    this.education = this._dataService.getData().education;
  }

  openEducationModal(edu: any) {
    this.selectedEducation = edu;
    this.isEducationModalOpen = true;
  }

  deleteEducation(id: number) {
    this.education = this.education.filter(edu => edu.id !== id);
  }

  saveEducation(newEdu: any) {
    if (newEdu.id) {
      const index = this.education.findIndex(edu => edu.id === newEdu.id);
      if (index !== -1) {
        this.education[index] = newEdu;
      }
    } else {
      newEdu.id = this.education.length + 1;
      this.education.push(newEdu);
    }
    this.isEducationModalOpen = false;
  }

  closeModal() {
    this.isEducationModalOpen = false;
  }
}
