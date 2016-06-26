import { Component, OnInit } from '@angular/core';
import { LunchOptionComponent } from './lunch-option/lunch-option.component';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

@Component({
  moduleId: module.id,
  selector: 'lunch-options',
  templateUrl: 'lunch-options.component.html',
  styleUrls: ['lunch-options.component.css'],
  directives: [LunchOptionComponent, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES],
  directives: [LunchOptionComponent, MD_LIST_DIRECTIVES],
})
export class LunchOptionsComponent implements OnInit {

  constructor() {}
  constructor(private optionsService: OptionsService) {}

  ngOnInit() {
  }

}
