import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenerio6Child2Component } from './scenerio6-child2.component';

describe('Scenerio6Child2Component', () => {
  let component: Scenerio6Child2Component;
  let fixture: ComponentFixture<Scenerio6Child2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenerio6Child2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenerio6Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
