import { Directive, ElementRef, Renderer, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[mouseAction]'
})
export class MouseActionDirective {

  constructor( private el:ElementRef, private renderer:Renderer) { 
    this.changeBgColor('white');
  }

  @HostBinding('style.border')border:string;
  @HostListener('mouseover')onMouseOver() {
    this.changeBgColor ('red');
    this.border = '2px solid yellow';
  }
  @HostListener('mouseleave')onmouseleave() {
    this.changeBgColor('green');
  }
  changeBgColor(color:string) {
    this.renderer.setElementStyle(this.el.nativeElement,'backgroundColor',color);
  }
}
