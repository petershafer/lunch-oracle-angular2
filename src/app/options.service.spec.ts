/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { OptionsService } from './options.service';

describe('Options Service', () => {
  beforeEachProviders(() => [OptionsService]);

  it('should ...',
      inject([OptionsService], (service: OptionsService) => {
    expect(service).toBeTruthy();
  }));
});
