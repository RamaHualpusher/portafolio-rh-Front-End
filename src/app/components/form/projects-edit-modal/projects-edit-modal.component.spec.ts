import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsEditModalComponent } from './projects-edit-modal.component';

describe('ProjectsEditModalComponent', () => {
  let component: ProjectsEditModalComponent;
  let fixture: ComponentFixture<ProjectsEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
