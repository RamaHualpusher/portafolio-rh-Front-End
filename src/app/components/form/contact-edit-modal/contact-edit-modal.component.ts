// contact-edit-modal.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/types/User';

@Component({
  selector: 'app-contact-edit-modal',
  templateUrl: './contact-edit-modal.component.html',
  styleUrls: ['./contact-edit-modal.component.css']
})
export class ContactEditModalComponent implements OnInit {
  @Input() data: User | null = null; // Modificado a User
  @Output() save = new EventEmitter<User>();
  @Output() close = new EventEmitter<void>();

  editedData: User = {
    id: 0,
    name: '',
    lastname: '',
    profession: '',
    alias: '',
    phone: '',
    email: '',
    address: '',
    imgProfile: '',
    aboutme: '',
    experience: [],
    education: [],
    skills: [],
    projects: [],
    social: []
  };

  ngOnInit() {
    if (this.data) {
      this.editedData = { ...this.data };
    }
  }

  onSave() {
    this.save.emit(this.editedData);
  }

  onClose() {
    this.close.emit();
  }
}
