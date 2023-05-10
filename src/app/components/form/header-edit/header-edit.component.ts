import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../header/header.component';

@Component({
  selector: 'app-header-edit',
  templateUrl: './header-edit.component.html',
  styleUrls: ['./header-edit.component.css']
})
export class HeaderEditComponent implements OnInit {
  @Input() person: Person | null = null;
  @Output() save = new EventEmitter<Person>();
  @Output() close = new EventEmitter<void>();

  editedPerson: Person = {
    id: 0,
    name: '',
    lastname: '',
    profession: '',
    alias: ''
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
