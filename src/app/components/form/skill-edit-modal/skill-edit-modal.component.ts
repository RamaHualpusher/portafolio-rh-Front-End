// skill-edit-modal.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Skill {
  id: number | null;
  name: string;
  level: string;
}

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
  editedSkillLevel: number | null = null; // Add this line

  ngOnInit() {
    this.editedSkill = this.skill ? JSON.parse(JSON.stringify(this.skill)) : this.createNewSkill();
    this.editedSkillLevel = this.editedSkill ? parseInt(this.editedSkill.level) : null;
    if (!this.editedSkill) {
      return;
    }
  }

  createNewSkill(): Skill {
    return {
      id: null,
      name: '',
      level: ''
    };
  }

  onSave() {
    if (this.editedSkill) {
      this.editedSkill.level = this.editedSkillLevel!.toString();
      this.save.emit(this.editedSkill);
    }
  }

  onClose() {
    this.close.emit();
  }
}
