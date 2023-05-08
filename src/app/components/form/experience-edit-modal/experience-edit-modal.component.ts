import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
selector: 'app-experience-edit-modal',
templateUrl: './experience-edit-modal.component.html',
styleUrls: ['./experience-edit-modal.component.css']
})
export class ExperienceEditModalComponent implements OnInit {
@Input() experience: any = null;
@Output() save = new EventEmitter<any>();
@Output() close = new EventEmitter<void>();

editedExperience: any;

ngOnInit() {
this.editedExperience = this.experience ? JSON.parse(JSON.stringify(this.experience)) : this.createNewExperience();
}

createNewExperience() {
return {
id: null,
position: '',
company: '',
from: '',
to: '',
description: ''
};
}

onSave() {
this.save.emit(this.editedExperience);
}

onClose() {
this.close.emit();
}
}
