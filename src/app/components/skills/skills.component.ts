import { Component, Input, OnInit } from '@angular/core';
import { SkillGroup } from 'src/types/SkillGroup';
import { Skill } from 'src/types/Skill';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input() skillGroups: SkillGroup[] = [];
  selectedSkillGroup: SkillGroup | null = null;
  selectedSkill: Skill | null = null;
  isSkillModalOpen: boolean = false;


  ngOnInit() {

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
