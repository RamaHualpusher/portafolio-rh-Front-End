import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about-edit-modal',
  templateUrl: './about-edit-modal.component.html',
  styleUrls: ['./about-edit-modal.component.css']
})
export class AboutEditModalComponent implements OnInit {
  @Input() aboutInfo: string | null = null;
  @Output() save = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  editedAboutInfo: string = '';

  ngOnInit() {
    this.editedAboutInfo = this.aboutInfo || '';
  }

  onSave() {
    this.save.emit(this.editedAboutInfo);
  }

  onClose() {
    this.close.emit();
  }
}
