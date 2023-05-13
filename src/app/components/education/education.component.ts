// education.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/types/Education';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  @Input() education: Education[] = [];
  isEducationModalOpen: boolean = false;
  selectedEducation: any = null;


  ngOnInit(): void {
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
