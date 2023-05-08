import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about-edit-modal',
  templateUrl: './about-edit-modal.component.html',
  styleUrls: ['./about-edit-modal.component.css']
})
export class AboutEditModalComponent implements OnInit {
  @Input() aboutText: string = '';
  @Output() save = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  updatedAboutText: string = '';

  ngOnInit() {
    this.updatedAboutText = this.aboutText;
  }

  onSave() {
    this.save.emit(this.updatedAboutText);
  }

  onClose() {
    this.close.emit();
  }
}
