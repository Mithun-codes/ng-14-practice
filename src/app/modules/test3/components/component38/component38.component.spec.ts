import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component38Component } from './component38.component';

describe('Component38Component', () => {
  let component: Component38Component;
  let fixture: ComponentFixture<Component38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component38Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
