/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { LunchChoiceComponent } from './lunch-choice.component';

describe('Component: LunchChoice', () => {
  it('should create an instance', () => {
    let component = new LunchChoiceComponent();
    expect(component).toBeTruthy();
  });
});
