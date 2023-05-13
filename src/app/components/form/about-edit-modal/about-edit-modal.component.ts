// about-edit-modal.component.ts
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
    // Verificación de campo no vacío
    if(this.editedAboutInfo.trim() != ''){
      this.save.emit(this.editedAboutInfo);
    }
    else{
      alert("El campo no puede estar vacío");
    }
  }

  onClose() {
    this.close.emit();
  }
}
