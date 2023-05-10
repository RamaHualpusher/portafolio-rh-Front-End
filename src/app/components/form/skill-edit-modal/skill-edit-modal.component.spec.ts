import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillEditModalComponent } from './skill-edit-modal.component';

describe('SkillEditModalComponent', () => {
  let component: SkillEditModalComponent;
  let fixture: ComponentFixture<SkillEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
