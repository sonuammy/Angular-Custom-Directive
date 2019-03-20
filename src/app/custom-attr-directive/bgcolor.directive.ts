import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appBgcolor]'
})
export class BgcolorDirective {

  constructor( private el:ElementRef, private renderer:Renderer) { 
    this.changeBgColor('green', 'pink');
  }
  changeBgColor(color : string, backgroundColor : string){
    this.renderer.setElementStyle(this.el.nativeElement,'color',color);
    this.renderer.setElementStyle(this.el.nativeElement,'backgroundColor',backgroundColor);
    this.renderer.setElementStyle(this.el.nativeElement,'box-shadow','2px 2px 12px #58A362');
  }

}
