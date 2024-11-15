import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatTextComponent } from './float-text.component';

describe('FloatTextComponent', () => {
  let component: FloatTextComponent;
  let fixture: ComponentFixture<FloatTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatTextComponent]
    });
    fixture = TestBed.createComponent(FloatTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
