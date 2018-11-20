import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  it('#clicked() should toggle #isOn', () => {
    const comp = new TestComponent();
    expect(comp.isOn).toBe(false, 'off al inicio');
    comp.clicked();
    expect(comp.isOn).toBe(true, 'on despues de Click');
    comp.clicked();
    expect(comp.isOn).toBe(false, 'off despues de segundo Click');
  });

  it('#clicked() should set #message to "is on"', () => {
    const comp = new TestComponent();
    expect(comp.message).toMatch(/es off/i, 'off al inicio');
    comp.clicked();
    expect(comp.message).toMatch(/es on/i, 'on after clicked');
  });
});

