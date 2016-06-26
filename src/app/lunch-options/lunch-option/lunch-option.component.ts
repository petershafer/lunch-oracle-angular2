import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'lunch-option',
  templateUrl: 'lunch-option.component.html',
  styleUrls: ['lunch-option.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class LunchOptionComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
