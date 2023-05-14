// education-edit-modal.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-education-edit-modal',
  templateUrl: './education-edit-modal.component.html',
  styleUrls: ['./education-edit-modal.component.css']
})
export class EducationEditModalComponent implements OnInit {
  @Input() education: any = null;
  @Output() save = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  editedEducation: any;

  ngOnInit() {
    this.editedEducation = this.education ? JSON.parse(JSON.stringify(this.education)) : this.createNewEducation();
  }

  createNewEducation() {
    return {
      id: null,
      institution: '',
      degree: '',
      startDate: '',
      endDate: ''
    };
  }

  onSave() {
    // Verificación de campo no vacío
    if(this.editedEducation.institution.trim() != '' && this.editedEducation.degree.trim() != '' && this.editedEducation.startDate.trim() != ''){
      // Convirtiendo las fechas a formato MySQL
      this.editedEducation.startDate = this.formatDate(this.editedEducation.startDate);
      this.editedEducation.endDate = this.formatDate(this.editedEducation.endDate);

      this.save.emit(this.editedEducation);
    }
    else{
      alert("Los campos no pueden estar vacíos");
    }
  }


  // Función para convertir las fechas al formato MySQL
  formatDate(date: Date | null): string | null {
    if(date) {
      let newDate = new Date(date);
      let year = newDate.getUTCFullYear();
      let month = (newDate.getUTCMonth() + 1).toString().padStart(2, '0');
      let day = (newDate.getUTCDate()+1).toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    return null;
  }




  onClose() {
    this.close.emit();
  }
}
