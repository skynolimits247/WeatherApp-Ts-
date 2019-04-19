import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NanodisplayComponent } from './nanodisplay.component';

describe('NanodisplayComponent', () => {
  let component: NanodisplayComponent;
  let fixture: ComponentFixture<NanodisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NanodisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NanodisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
