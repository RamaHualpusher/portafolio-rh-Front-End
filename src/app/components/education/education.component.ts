import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Education } from 'src/types/Education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  @Input() education: Education[] = [];
  @Input() userId: number | null = null;
  isEducationModalOpen: boolean = false;
  selectedEducation: any = null;

  constructor(private dataService: DataService<Education>) {}

  ngOnInit(): void {
  }

  openEducationModal(edu: any) {
    this.selectedEducation = edu;
    this.isEducationModalOpen = true;
  }

  deleteEducation(id: number) {
    this.dataService.deleteData('education', id).subscribe(() => {
      this.education = this.education.filter(edu => edu.id !== id);
    });
  }

  saveEducation(newEdu: any) {
    newEdu.userId = this.userId;
    if (newEdu.id) {
      this.dataService.updateData('education', newEdu.id, newEdu).subscribe(updatedEdu => {
        const index = this.education.findIndex(edu => edu.id === newEdu.id);
        if (index !== -1) {
          this.education[index] = updatedEdu;
        }
      });
    } else {
      this.dataService.createData('education', newEdu).subscribe(createdEdu => {
        this.education.push(createdEdu);
      });
    }
    this.isEducationModalOpen = false;
  }

  closeModal() {
    this.isEducationModalOpen = false;
  }
}
