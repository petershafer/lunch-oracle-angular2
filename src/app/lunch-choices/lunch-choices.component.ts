import { Component, OnInit } from '@angular/core';
import { LunchChoiceComponent } from './lunch-choice/lunch-choice.component';

@Component({
  moduleId: module.id,
  selector: 'lunch-choices',
  templateUrl: 'lunch-choices.component.html',
  styleUrls: ['lunch-choices.component.css'],
  directives: [LunchChoiceComponent]
})
export class LunchChoicesComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
