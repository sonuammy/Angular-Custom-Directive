import { Directive, Input, ElementRef, AfterViewInit, Renderer } from '@angular/core';

@Directive({
  selector: '[customTheme]'
})
export class CustomThemeDirective implements AfterViewInit {

  @Input() tcolor : string;
  @Input() bcolor : string;
  @Input() tsize : string;
  constructor(private el:ElementRef) { }

  ngAfterViewInit() {
    this.tcolor = this.tcolor || 'green';
    this.bcolor = this.bcolor || 'cyan';
    this.tsize = this.tsize || '20px';
    this.el.nativeElement.style.color = this.tcolor;
    this.el.nativeElement.style.backgroundColor = this.bcolor;
    this.el.nativeElement.style.fontsize = this.tsize;
  }

  /* another example*/
  // @Input() customTheme: string;
  // @Input() customThemeX: string;
  // @Input() customThemeY: string;
  // @Input() customThemeBlur: string;

  // constructor(private el: ElementRef, private renderer: Renderer) { 
  //   this.ChangeBgColor('green','pink');
  // }
  // ChangeBgColor(color: string, backgroundColor: string) {
  //     this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
  //     this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', backgroundColor);
  // }

  // ngAfterViewInit() {
  //   let shadowStr = `${ this.customThemeX } 
  //                   ${ this.customThemeY } 
  //                   ${ this.customThemeBlur } 
  //                   ${ this.customTheme }`;
  //   this.renderer.setElementStyle(this.el.nativeElement, 'box-shadow', shadowStr);
  // }

}
