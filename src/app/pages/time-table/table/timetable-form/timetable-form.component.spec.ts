import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableFormComponent } from './timetable-form.component';

describe('TimetableFormComponent', () => {
  let component: TimetableFormComponent;
  let fixture: ComponentFixture<TimetableFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
