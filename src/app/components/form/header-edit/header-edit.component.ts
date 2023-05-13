import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonHeader } from 'src/types/PersonHeader';

@Component({
  selector: 'app-header-edit',
  templateUrl: './header-edit.component.html',
  styleUrls: ['./header-edit.component.css']
})
export class HeaderEditComponent implements OnInit {
  @Input() person: PersonHeader | null = null;
  @Output() save = new EventEmitter<PersonHeader>();
  @Output() close = new EventEmitter<void>();

  editedPerson: PersonHeader = {
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
