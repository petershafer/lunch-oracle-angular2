import { Injectable } from '@angular/core';

@Injectable()
export class OptionsService {

  private options:Array<any>;

  constructor() {
    this.options = [

      "Walking Distance",
      "Driving Distance",

      "Outdoor Seating",
      "Sit Down",

      "Fast Service",
      "Take Out",

      "Pizza",
      "Alcohol",
      "Thai",
      "Hot Dogs",
      "Coffee",
      "Shishi",
      "Comfort Food",
      "Breakfast",
      "Desserts"

    ]
  }

  getOptions() {
    return Promise.resolve(this.options)
  }
}
