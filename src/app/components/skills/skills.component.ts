import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: any[];

  constructor(private _dataService: DataService) {
    this.skills = this._dataService.getData().skills;
  }

  getColor(index: number): string {
    const colors = ['danger', 'info', 'success', 'warning', 'primary'];
    return colors[index % colors.length];
  }
}
