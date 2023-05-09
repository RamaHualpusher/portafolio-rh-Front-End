// projects.component.ts
import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: any[];
  isProjectModalOpen: boolean = false;
  selectedProject: any = null;

  constructor(private _dataService: DataService) {
    this.projects = this._dataService.getData().projects;
  }

  openProjectModal(project: any) {
    this.selectedProject = project;
    this.isProjectModalOpen = true;
  }

  deleteProject(id: number) {
    this.projects = this.projects.filter(project => project.id !== id);
  }

  saveProject(newProject: any) {
    if (newProject.id) {
      const index = this.projects.findIndex(project => project.id === newProject.id);
      if (index !== -1) {
        this.projects[index] = newProject;
      }
    } else {
      newProject.id = this.projects.length + 1;
      this.projects.push(newProject);
    }
    this.isProjectModalOpen = false;
  }

  closeModal() {
    this.isProjectModalOpen = false;
  }
}
