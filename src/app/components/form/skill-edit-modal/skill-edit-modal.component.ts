import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from 'src/types/Skill';


@Component({
  selector: 'app-skill-edit-modal',
  templateUrl: './skill-edit-modal.component.html',
  styleUrls: ['./skill-edit-modal.component.css']
})
export class SkillEditModalComponent implements OnInit {
  @Input() skill: Skill | null = null;
  @Output() save = new EventEmitter<Skill>();
  @Output() close = new EventEmitter<void>();

  editedSkill: Skill | null = null;

  ngOnInit() {
    this.editedSkill = this.skill ? { ...this.skill } : this.createNewSkill();
  }

  createNewSkill(): Skill {
    return {
      id: null,
      name: '',
      level: 0, // level es un número, no un string
      groupId: null // groupId es requerido en la interfaz Skill
    };
  }

  onSave() {
    if (this.editedSkill) {
      this.save.emit(this.editedSkill);
    }
  }

  onClose() {
    this.close.emit();
  }
}
