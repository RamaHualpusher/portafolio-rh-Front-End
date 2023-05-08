import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationEditModalComponent } from './education-edit-modal.component';

describe('EducationEditModalComponent', () => {
  let component: EducationEditModalComponent;
  let fixture: ComponentFixture<EducationEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
