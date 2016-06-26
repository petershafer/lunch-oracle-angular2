import { Injectable } from '@angular/core';

@Injectable()
export class ChoicesService {

  private choices:Array<any>;

  constructor() {
    this.choices = [
      {"name": "My Choice", "options": ["option 1", "option 2"]},
      {"name": "Another Choice", "options": ["option 2"]}
    ]
  }

  getChoices() {
    return Promise.resolve(this.choices)
  }

}
