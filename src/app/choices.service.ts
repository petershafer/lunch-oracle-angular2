import { Injectable } from '@angular/core';

@Injectable()
export class ChoicesService {

  private choices:Array<any>;

  constructor() {
    this.choices = [
      {"name": "My Choice", "options": ["Option 1", "Option 2"]},
      {"name": "Another Choice", "options": ["Option 2"]}
    ]
  }

  getChoices() {
    return Promise.resolve(this.choices)
  }

}
