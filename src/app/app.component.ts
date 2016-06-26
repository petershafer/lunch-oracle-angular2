import { Component } from '@angular/core';
import { LunchChoicesComponent } from './lunch-choices/lunch-choices.component';
import { LunchOptionsComponent } from './lunch-options/lunch-options.component';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [LunchChoicesComponent, LunchOptionsComponent, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class AppComponent {
  title = 'app works!';
}
