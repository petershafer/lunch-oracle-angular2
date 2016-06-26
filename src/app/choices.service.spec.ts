/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ChoicesService } from './choices.service';

describe('Choices Service', () => {
  beforeEachProviders(() => [ChoicesService]);

  it('should ...',
      inject([ChoicesService], (service: ChoicesService) => {
    expect(service).toBeTruthy();
  }));
});
