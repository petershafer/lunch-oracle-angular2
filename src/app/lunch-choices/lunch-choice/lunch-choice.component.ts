import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'lunch-choice',
  templateUrl: 'lunch-choice.component.html',
  styleUrls: ['lunch-choice.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class LunchChoiceComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
