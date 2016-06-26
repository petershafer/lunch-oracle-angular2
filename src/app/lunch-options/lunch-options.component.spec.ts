/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { LunchOptionsComponent } from './lunch-options.component';

describe('Component: LunchOptions', () => {
  it('should create an instance', () => {
    let component = new LunchOptionsComponent();
    expect(component).toBeTruthy();
  });
});
