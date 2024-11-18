import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtVidComponent } from './yt-vid.component';

describe('YtVidComponent', () => {
  let component: YtVidComponent;
  let fixture: ComponentFixture<YtVidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YtVidComponent]
    });
    fixture = TestBed.createComponent(YtVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
