import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LunchOptionComponent } from './lunch-option/lunch-option.component';
import { OptionsService } from '../options.service';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

@Component({
  moduleId: module.id,
  selector: 'lunch-options',
  templateUrl: 'lunch-options.component.html',
  styleUrls: ['lunch-options.component.css'],
  directives: [LunchOptionComponent, MD_LIST_DIRECTIVES],
  providers: [OptionsService]
})
export class LunchOptionsComponent implements OnInit {

  options;
  @Output() optChange;

  constructor(private optionsService: OptionsService) {
    this.optChange = new EventEmitter();
  }

  ngOnInit() {
    this.optionsService.getOptions().then(options => this.options = options);
  }

  onSelected(option) {
    console.log("emitting...",option);
    this.optChange.emit(option);
  }

}
