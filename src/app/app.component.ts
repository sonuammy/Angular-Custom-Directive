import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  attdirective : string = 'Custom Attribute Directive';
  strdirective : string = 'Custom Structural Directive';
  
  colors = ['CYAN', 'GREEN', 'YELLOW'];
  myColor = '';

  showCpIf = false;
  showCpDelay = false;
  delayInSec = 0;
}
