import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Experience } from 'src/types/Experience';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  @Input() experience: Experience[] = [];
  @Input() userId: number | null = null;
  @Input() isLoggedIn: boolean | null = null;
  isExperienceModalOpen: boolean = false;
  selectedExperience: any = null;

  constructor(private dataService: DataService<Experience>) {}

  ngOnInit() {

  }

  openExperienceModal(exp: any) {
    this.selectedExperience = exp;
    this.isExperienceModalOpen = true;
  }

  deleteExperience(id: number) {
    this.dataService.deleteData('experience', id).subscribe(() => {
      this.experience = this.experience.filter(exp => exp.id !== id);
    });
  }

  saveExperience(newExp: any) {
    newExp.userId = this.userId;
    if (newExp.id) {
      this.dataService.updateData('experience', newExp.id, newExp).subscribe(updatedExp => {
        const index = this.experience.findIndex(exp => exp.id === newExp.id);
        if (index !== -1) {
          this.experience[index] = updatedExp;
        }
      });
    } else {
      this.dataService.createData('experience', newExp).subscribe(createdExp => {
        this.experience.push(createdExp);
      });
    }
    this.isExperienceModalOpen = false;
  }

  closeModal() {
    this.isExperienceModalOpen = false;
  }
}
