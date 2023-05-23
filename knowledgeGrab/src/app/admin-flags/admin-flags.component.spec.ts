import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFlagsComponent } from './admin-flags.component';

describe('AdminFlagsComponent', () => {
  let component: AdminFlagsComponent;
  let fixture: ComponentFixture<AdminFlagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFlagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
