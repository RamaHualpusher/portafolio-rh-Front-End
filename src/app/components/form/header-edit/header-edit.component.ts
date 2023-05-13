import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonHeader } from 'src/types/PersonHeader';
import { User } from 'src/types/User';

@Component({
  selector: 'app-header-edit',
  templateUrl: './header-edit.component.html',
  styleUrls: ['./header-edit.component.css']
})
export class HeaderEditComponent implements OnInit {
  @Input() person: User | null = null; // Modificado a User
  @Output() save = new EventEmitter<User>();
  @Output() close = new EventEmitter<void>();

  editedPerson: User = {
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
    if (this.person) {
      this.editedPerson = { ...this.person };
    }
  }

  onSave() {
    this.save.emit(this.editedPerson);
  }

  onClose() {
    this.close.emit();
  }
}
