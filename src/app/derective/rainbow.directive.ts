import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
tableau = [
  'green',
  'yellow',
  'red',
  'pink',
  'red hot',
  'blue',
  'black'
];
@HostBinding('style.borderColor') bc;
@HostBinding('style.color') color;

  constructor() { }
@HostListener('keypress') changeColor(){
    const index = Math.floor(Math.random() * (this.tableau.length - 1));
    this.bc = this.tableau[index];
    const index2 = Math.floor(Math.random() * (this.tableau.length - 1));
    this.color = this.tableau[index2];
  }
}
