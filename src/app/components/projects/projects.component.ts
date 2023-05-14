// projects.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Project } from 'src/types/Project';
import { User } from 'src/types/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() projects: Project[] | undefined = [];
  @Input() userId: number | null = null;
  @Input() isLoggedIn: boolean | null = null;

  isProjectModalOpen: boolean = false;
  selectedProject: any = null;


  constructor(private dataService: DataService<Project>) {}

  ngOnInit() {
    //this.projects = this.projects;
  }

  openProjectModal(project: any) {
    this.selectedProject = project;
    this.isProjectModalOpen = true;
  }

  deleteProject(id: number) {
    this.dataService.deleteData('project', id).subscribe(() => {
      this.projects = this.projects!.filter(project => project.id !== id);
    });
  }

  saveProject(newProject: any) {
    newProject.userId = this.userId;
    if (newProject.id) {
      this.dataService.updateData('project', newProject.id, newProject).subscribe(updatedProject => {
        const index = this.projects!.findIndex(project => project.id === newProject.id);
        if (index !== -1) {
          this.projects![index] = updatedProject;
        }
      });
    } else {
      newProject.image = 'https://picsum.photos/200/300';
      this.dataService.createData('project', newProject).subscribe(createdProject => {
        this.projects!.push(createdProject);
      });
    }
    this.isProjectModalOpen = false;
  }


  closeModal() {
    this.isProjectModalOpen = false;
  }
}
