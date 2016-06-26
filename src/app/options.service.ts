import { Injectable } from '@angular/core';

@Injectable()
export class OptionsService {

  private options:Array<any>;

  constructor() {
    this.options = [
      "Option 1",
      "Option 2"
    ]
  }

  getOptions() {
    return Promise.resolve(this.options)
  }
}
