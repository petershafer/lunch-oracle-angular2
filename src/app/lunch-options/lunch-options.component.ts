import { Component, OnInit } from '@angular/core';
import { LunchOptionComponent } from './lunch-option/lunch-option.component';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'lunch-options',
  templateUrl: 'lunch-options.component.html',
  styleUrls: ['lunch-options.component.css'],
  directives: [LunchOptionComponent, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES],
})
export class LunchOptionsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
