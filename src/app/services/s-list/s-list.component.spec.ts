import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SListComponent } from './s-list.component';

describe('SListComponent', () => {
  let component: SListComponent;
  let fixture: ComponentFixture<SListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SListComponent]
    });
    fixture = TestBed.createComponent(SListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
