import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { OptionsService } from '../../options.service';

@Component({
  moduleId: module.id,
  selector: 'lunch-option',
  templateUrl: 'lunch-option.component.html',
  styleUrls: ['lunch-option.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES],
  providers: [OptionsService]
})
export class LunchOptionComponent implements OnInit {

  @Input() option;
  @Output() onSelected;

  active = false;

  constructor() {
    this.onSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  selected(option){
    this.active = !this.active;
    this.onSelected.emit(option);
  }

}
