/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { LunchOptionComponent } from './lunch-option.component';

describe('Component: LunchOption', () => {
  it('should create an instance', () => {
    let component = new LunchOptionComponent();
    expect(component).toBeTruthy();
  });
});
