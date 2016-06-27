import { Component, OnInit } from '@angular/core';
import { LunchChoiceComponent } from './lunch-choice/lunch-choice.component';
import { ChoicesService } from '../choices.service';
import { OptionsService } from '../options.service';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'lunch-choices',
  templateUrl: 'lunch-choices.component.html',
  styleUrls: ['lunch-choices.component.css'],
  directives: [LunchChoiceComponent, MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES],
  providers: [ChoicesService, OptionsService]
})
export class LunchChoicesComponent implements OnInit {

  choices

  constructor(private choicesService: ChoicesService, private optionsService: OptionsService) {
    optionsService.optionChanged$.subscribe(option => this.optionChanged(option));
  }

  ngOnInit() {
    this.choicesService.getChoices().then(choices => this.choices = choices);
  }

  optionChanged(option) {
    console.log("adjusting list of choices for...", option);
  }

}
