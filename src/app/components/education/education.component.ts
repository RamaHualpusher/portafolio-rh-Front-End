import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Education } from 'src/types/Education';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  @Input() education: Education[] = [];
  @Input() userId: number | null = null;
  @Input() isLoggedIn: boolean | null = null;
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

    // Verifica si startDate no es null y es válida antes de formatearla.
    if (newEdu.startDate && !isNaN(new Date(newEdu.startDate).valueOf())) {
      newEdu.startDate = newEdu.startDate;
    } else {
      // startDate no puede ser null o inválida
      alert('Fecha de inicio es obligatoria y debe ser válida');
      return;
    }

    // Verifica si endDate no es null y es válida antes de formatearla. Si es null, la envía como null.
    if (newEdu.endDate && !isNaN(new Date(newEdu.endDate).valueOf())) {
      newEdu.endDate = newEdu.endDate;
    } else {
      newEdu.endDate = null;
    }

    if (newEdu.id) {
      // Si newEdu.id existe, actualiza la educación existente
      this.dataService.updateData('education', newEdu.id, newEdu).subscribe(updatedEdu => {
        const index = this.education.findIndex(edu => edu.id === newEdu.id);
        if (index !== -1) {
          this.education[index] = updatedEdu;
        }
      });
    } else {
      // Si newEdu.id no existe, crea una nueva educación
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
