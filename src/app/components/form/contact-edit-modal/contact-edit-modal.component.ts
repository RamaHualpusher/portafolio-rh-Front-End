// contact-edit-modal.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-edit-modal',
  templateUrl: './contact-edit-modal.component.html',
  styleUrls: ['./contact-edit-modal.component.css']
})
export class ContactEditModalComponent implements OnInit {
  @Input() data: any = null;
  @Output() save = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  editedData: any;

  ngOnInit() {
    this.editedData = this.data ? JSON.parse(JSON.stringify(this.data)) : {};
  }

  onSave() {
    this.save.emit(this.editedData);
  }

  onClose() {
    this.close.emit();
  }
}
