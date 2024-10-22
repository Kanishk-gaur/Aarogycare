import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyurComponent } from './ayur.component';

describe('AyurComponent', () => {
  let component: AyurComponent;
  let fixture: ComponentFixture<AyurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AyurComponent]
    });
    fixture = TestBed.createComponent(AyurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
