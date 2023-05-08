import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceEditModalComponent } from './experience-edit-modal.component';

describe('ExperienceEditModalComponent', () => {
  let component: ExperienceEditModalComponent;
  let fixture: ComponentFixture<ExperienceEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
