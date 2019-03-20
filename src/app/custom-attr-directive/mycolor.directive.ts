import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {

  constructor( private el:ElementRef) { 
    el.nativeElement.style.backgroundColor = "yellow";
  }

}
