import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleCardComponent } from './circle-card.component';

describe('CircleCardComponent', () => {
  let component: CircleCardComponent;
  let fixture: ComponentFixture<CircleCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircleCardComponent]
    });
    fixture = TestBed.createComponent(CircleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
