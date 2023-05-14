import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { SkillGroup } from 'src/types/SkillGroup';
import { Skill } from 'src/types/Skill';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input() skillGroups: SkillGroup[] = [];
  @Input() userId: number | null = null;
  @Input() isLoggedIn: boolean | null = null;
  selectedSkillGroup: SkillGroup | null = null;
  selectedSkill: Skill | null = null;
  isSkillModalOpen: boolean = false;

  constructor(private dataService: DataService<Skill>) {}

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
    this.dataService.deleteData('skill', id).subscribe(() => {
      skillGroup.items = skillGroup.items.filter(skill => skill.id !== id);
    });
  }

  saveSkill(editedSkill: Skill) {
    if (!this.selectedSkillGroup || !this.selectedSkillGroup.items) {
      return;
    }

    editedSkill.groupId = this.selectedSkillGroup.id;
    if (editedSkill.id) {
      this.dataService.updateData('skill', editedSkill.id, editedSkill).subscribe(updatedSkill => {
        const index = this.selectedSkillGroup!.items.findIndex(skill => skill.id === editedSkill.id);
        if (index !== -1) {
          this.selectedSkillGroup!.items[index] = updatedSkill;
        }
      });
    } else {
      this.dataService.createData('skill', editedSkill).subscribe(createdSkill => {
        this.selectedSkillGroup!.items.push(createdSkill);
      });
    }
    this.isSkillModalOpen = false;
  }

  closeModal() {
    this.isSkillModalOpen = false;
  }
}
