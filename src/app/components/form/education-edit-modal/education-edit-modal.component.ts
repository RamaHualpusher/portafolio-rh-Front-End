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
      from: '',
      to: ''
    };
  }

  onSave() {
    // Verificación de campo no vacío
    if(this.editedEducation.institution.trim() != '' && this.editedEducation.degree.trim() != ''){
      // Convirtiendo las fechas a formato MySQL
      this.editedEducation.from = this.formatDate(this.editedEducation.from);
      this.editedEducation.to = this.formatDate(this.editedEducation.to);

      this.save.emit(this.editedEducation);
    }
    else{
      alert("Los campos no pueden estar vacíos");
    }
  }

  onClose() {
    this.close.emit();
  }

  // Función para convertir las fechas al formato MySQL
  formatDate(date: string): string {
    let newDate = new Date(date);
    return newDate.getFullYear() + "-" + (newDate.getMonth() + 1).toString().padStart(2, '0') + "-" + newDate.getDate().toString().padStart(2, '0');
  }
}
