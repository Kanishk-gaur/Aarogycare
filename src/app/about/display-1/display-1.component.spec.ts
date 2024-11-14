import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display1Component } from './display-1.component';

describe('Display1Component', () => {
  let component: Display1Component;
  let fixture: ComponentFixture<Display1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Display1Component]
    });
    fixture = TestBed.createComponent(Display1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
