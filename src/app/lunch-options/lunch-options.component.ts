import { Component, OnInit } from '@angular/core';
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

  options

  constructor(private optionsService: OptionsService) {}

  ngOnInit() {
    this.optionsService.getOptions().then(options => this.options = options);
  }

}
