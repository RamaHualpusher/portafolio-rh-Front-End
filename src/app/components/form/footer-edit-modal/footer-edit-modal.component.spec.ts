import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEditModalComponent } from './footer-edit-modal.component';

describe('FooterEditModalComponent', () => {
  let component: FooterEditModalComponent;
  let fixture: ComponentFixture<FooterEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
