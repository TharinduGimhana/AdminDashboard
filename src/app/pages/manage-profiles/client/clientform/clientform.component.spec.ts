import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientformComponent } from './clientform.component';

describe('ClientformComponent', () => {
  let component: ClientformComponent;
  let fixture: ComponentFixture<ClientformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
