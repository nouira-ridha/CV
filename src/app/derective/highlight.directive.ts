import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') bg = 'pink';

  constructor() { }
@HostListener('mouseenter') mouseenter(){
    this.bg = 'orange';
 }
  @HostListener('mouseleave') mouseleave(){
    this.bg = 'pink';
  }
}
