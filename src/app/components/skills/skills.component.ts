import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

interface Skill {
  id: number | null;
  name: string;
  level: string;
}


interface SkillGroup {
  type: string;
  items: Skill[];
}


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [];
  selectedSkillGroup: SkillGroup | null = null;
  selectedSkill: Skill | null = null;
  isSkillModalOpen: boolean = false;

  constructor(private _dataService: DataService) {
    const data = this._dataService.getData();
    this.skillGroups = data && data.skills ? data.skills : [];
  }

  getColor(index: number): string {
    const colors = ['danger', 'info', 'success', 'warning', 'primary'];
    return colors[index % colors.length];
  }

  openSkillModal(skillGroup: SkillGroup, skill: Skill | null) {
    this.selectedSkillGroup = skillGroup;
    this.selectedSkill = skill;
    this.isSkillModalOpen = true;
  }

  deleteSkill(skillGroup: SkillGroup, id: number) {
    skillGroup.items = skillGroup.items.filter(skill => skill.id !== id);
  }

  saveSkill(editedSkill: Skill) {
    if (!this.selectedSkillGroup || !this.selectedSkillGroup.items) {
      return;
    }

    if (editedSkill.id) {
      const index = this.selectedSkillGroup.items.findIndex(skill => skill.id === editedSkill.id);
      if (index !== -1) {
        this.selectedSkillGroup.items[index] = editedSkill;
      }
    } else {
      editedSkill.id = this.selectedSkillGroup.items.length + 1;
      this.selectedSkillGroup.items.push(editedSkill);
    }
    this.isSkillModalOpen = false;
  }


  closeModal() {
    this.isSkillModalOpen = false;
  }
}
