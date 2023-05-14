import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-experience-edit-modal',
  templateUrl: './experience-edit-modal.component.html',
  styleUrls: ['./experience-edit-modal.component.css']
})
export class ExperienceEditModalComponent implements OnInit {
  @Input() experience: any = null;
  @Output() save = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  editedExperience: any;

  ngOnInit() {
    this.editedExperience = this.experience ? JSON.parse(JSON.stringify(this.experience)) : this.createNewExperience();
  }

  createNewExperience() {
    return {
      id: null,
      position: '',
      company: '',
      startDate: '',
      endDate: '',
      description: ''
    };
  }

  onSave() {
    // Verificación de campo no vacío
    if(this.editedExperience.position.trim() != '' && this.editedExperience.company.trim() != '' && this.editedExperience.startDate.trim() != ''){
      // Convirtiendo las fechas a formato MySQL
      this.editedExperience.startDate = this.formatDate(this.editedExperience.startDate);
      this.editedExperience.endDate = this.editedExperience.endDate ? this.formatDate(this.editedExperience.endDate) : null;

      this.save.emit(this.editedExperience);
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

