import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficersformComponent } from './officersform.component';

describe('OfficersformComponent', () => {
  let component: OfficersformComponent;
  let fixture: ComponentFixture<OfficersformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficersformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficersformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
