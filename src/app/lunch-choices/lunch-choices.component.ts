import { Component, OnInit, Input } from '@angular/core';
import { LunchChoiceComponent } from './lunch-choice/lunch-choice.component';
import { ChoicesService } from '../choices.service';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'lunch-choices',
  templateUrl: 'lunch-choices.component.html',
  styleUrls: ['lunch-choices.component.css'],
  directives: [LunchChoiceComponent, MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES],
  providers: [ChoicesService]
})
export class LunchChoicesComponent implements OnInit {

  choices;
  @Input() filters;

  constructor(private choicesService: ChoicesService) {}

  ngOnInit() {
    this.choicesService.getChoices().then(choices => this.choices = choices);
  }

  filtered(choice) {
    let intersection = this.filters.filter(x => choice.options.indexOf(x) > -1);
    return this.filters.length != intersection.length;
  }

}
