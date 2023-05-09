import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialEditModalComponent } from './social-edit-modal.component';

describe('SocialEditModalComponent', () => {
  let component: SocialEditModalComponent;
  let fixture: ComponentFixture<SocialEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
