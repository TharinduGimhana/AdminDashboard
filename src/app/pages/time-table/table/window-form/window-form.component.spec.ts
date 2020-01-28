import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowFormComponent } from './window-form.component';

describe('WindowFormComponent', () => {
  let component: WindowFormComponent;
  let fixture: ComponentFixture<WindowFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
