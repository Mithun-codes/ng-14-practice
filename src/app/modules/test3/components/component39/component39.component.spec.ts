import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component39Component } from './component39.component';

describe('Component39Component', () => {
  let component: Component39Component;
  let fixture: ComponentFixture<Component39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component39Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
