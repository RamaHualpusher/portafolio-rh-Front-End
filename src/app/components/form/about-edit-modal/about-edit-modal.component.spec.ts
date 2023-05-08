import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEditModalComponent } from './about-edit-modal.component';

describe('AboutEditModalComponent', () => {
  let component: AboutEditModalComponent;
  let fixture: ComponentFixture<AboutEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
