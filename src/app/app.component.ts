import { Component } from '@angular/core';
import { LunchChoicesComponent } from './lunch-choices/lunch-choices.component';
import { LunchOptionsComponent } from './lunch-options/lunch-options.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
  styleUrls: ['app.component.css'],
  directives: [LunchChoicesComponent, LunchOptionsComponent]
})
export class AppComponent {
  title = 'app works!';
}
