import { Injectable } from '@angular/core';

@Injectable()
export class ChoicesService {

  private choices:Array<any>;

  constructor() {
    this.choices = [
      {"name": "Renners", "options":
        ["Walking Distance","Sit Down","Alcohol","Hot Dogs","Comfort Food"]},

      {"name": "Down to Earth", "options":
        ["Fast Service","Coffee","Breakfast"]},

      {"name": "Marcos", "options":
        ["Walking Distance","Sit Down","Alcohol","Coffee","Shishi","Breakfast","Desserts","Take Out","Desserts"]},

      {"name": "Silva Cart", "options":
        ["Walking Distance","Outdoor Seating","Sit Down","Coffee","Breakfast"]},

      {"name": "Safeway", "options":
        ["Driving Distance","Fast Service","Take Out","Coffee"]},

      {"name": "Broder Soder", "options":
        ["Driving Distance","Outdoor Seating","Sit Down","Alcohol","Coffee","Shishi","Breakfast","Desserts"]},

      {"name": "Fat City", "options":
        ["Walking Distance","Sit Down","Take Out","Coffee","Comfort Food","Breakfast"]},

      {"name": "Otto and Anita's", "options":
        ["Walking Distance","Sit Down","Alcohol","Comfort Food","Desserts"]},

      {"name": "Lucky Lab Pizza", "options":
        ["Walking Distance","Outdoor Seating","Sit Down","Take Out","Pizza","Alcohol","Comfort Food"]},

      {"name": "Thai Herbs", "options":
        ["Walking Distance","Outdoor Seating","Sit Down","Take Out","Alcohol","Thai"]},

      {"name": "La Provence", "options":
        ["Driving Distance","Outdoor Seating","Sit Down","Alcohol","Coffee","Shishi","Breakfast","Desserts"]},

      {"name": "Grand Central Bakery", "options":
        ["Walking Distance","Outdoor Seating","Take Out","Coffee","Breakfast","Desserts"]},

      {"name": "Old Market Pub", "options":
        ["Driving Distance","Outdoor Seating","Sit Down","Take Out","Pizza","Alcohol","Comfort Food"]},

      {"name": "Starbucks", "options":
        ["Walking Distance","Outdoor Seating","Fast Service","Coffee","Breakfast","Desserts"]},

      {"name": "Jimmy's", "options":
        ["Walking Distance","Sit Down","Alcohol","Comfort Food"]},

      {"name": "Laotion Cart", "options":
        ["Walking Distance","Outdoor Seating","Sit Down"]},

      {"name": "International Cart", "options":
        ["Walking Distance","Outdoor Seating","Sit Down"]},
    ].sort(function(a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
  }

  getChoices() {
    return Promise.resolve(this.choices)
  }

}
