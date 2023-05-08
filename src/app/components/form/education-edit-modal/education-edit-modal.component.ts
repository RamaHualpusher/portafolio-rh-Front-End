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
    this.save.emit(this.editedEducation);
  }

  onClose() {
    this.close.emit();
  }
}
