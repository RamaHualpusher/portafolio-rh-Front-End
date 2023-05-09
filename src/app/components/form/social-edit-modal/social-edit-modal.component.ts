// social-edit-modal.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


interface SocialOption {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-social-edit-modal',
  templateUrl: './social-edit-modal.component.html',
  styleUrls: ['./social-edit-modal.component.css']
})


export class SocialEditModalComponent implements OnInit {
  @Input() social: any = null;
  @Output() save = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  editedSocial: any;
  socialOptions: {name: string, icon: string}[] = [
    {name: 'linkedin', icon: 'fab fa-linkedin-in'},
    {name: 'github', icon: 'fab fa-github'},
    {name: 'facebook', icon: 'fab fa-facebook-f'},
    // Agrega aquí más redes sociales si es necesario
  ];

  ngOnInit() {
    this.editedSocial = this.social ? JSON.parse(JSON.stringify(this.social)) : {id: null, name: '', url: '', icon: ''};
  }

  onSelectSocial(event: any) {
    const socialOption: SocialOption | undefined = this.socialOptions.find(option => option.name === event.target.value);
    if (socialOption) {
      this.editedSocial.name = socialOption.name;
      this.editedSocial.icon = socialOption.icon;
    }
  }



  onSave() {
    this.save.emit(this.editedSocial);
  }

  onClose() {
    this.close.emit();
  }
}
