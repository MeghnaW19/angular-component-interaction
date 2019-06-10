import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenerio6Child1Component } from './scenerio6-child1.component';

describe('Scenerio6Child1Component', () => {
  let component: Scenerio6Child1Component;
  let fixture: ComponentFixture<Scenerio6Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenerio6Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenerio6Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
