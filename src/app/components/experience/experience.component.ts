import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experience: any[];
  isExperienceModalOpen: boolean = false;
  selectedExperience: any = null;

  constructor(private _dataService: DataService) {
    this.experience = this._dataService.getData().experience;
  }

  openExperienceModal(exp: any) {
    this.selectedExperience = exp;
    this.isExperienceModalOpen = true;
  }

  deleteExperience(id: number) {
    this.experience = this.experience.filter(exp => exp.id !== id);
  }

  saveExperience(newExp: any) {
    if (newExp.id) {
      const index = this.experience.findIndex(exp => exp.id === newExp.id);
      if (index !== -1) {
        this.experience[index] = newExp;
      }
    } else {
      newExp.id = this.experience.length + 1;
      this.experience.push(newExp);
    }
    this.isExperienceModalOpen = false;
  }

  closeModal() {
    this.isExperienceModalOpen = false;
  }
}
