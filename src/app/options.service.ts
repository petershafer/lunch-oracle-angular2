import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class OptionsService {

  optionChanged$: EventEmitter<any>;
  private options:Array<any>;

  constructor() {
    this.optionChanged$ = new EventEmitter();
    this.options = [
      "Option 1",
      "Option 2"
    ]
  }

  onSelected(option) {
    console.log("service onSelected");
    this.optionChanged$.emit(option);
  }

  getOptions() {
    return Promise.resolve(this.options)
  }
}
