// project-edit-modal.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-projects-edit-modal',
  templateUrl: './projects-edit-modal.component.html',
  styleUrls: ['./projects-edit-modal.component.css']
})
export class ProjectsEditModalComponent implements OnInit {
  @Input() project: any = null;
  @Output() save = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  editedProject: any;

  ngOnInit() {
    this.editedProject = this.project ? JSON.parse(JSON.stringify(this.project)) : this.createNewProject();
  }

  createNewProject() {
    return {
      id: null,
      name: '',
      description: '',
      url: ''
    };
  }


  onSave() {
    this.save.emit(this.editedProject);
  }

  onClose() {
    this.close.emit();
  }
}

