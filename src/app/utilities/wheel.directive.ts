
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[wheel]'
})

export class WheelDirective {
  i: number = 1;

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('mousewheel', ['$event'])
  onMousewheel(event) {
    if (event.wheelDelta > 0) {
      console.log(event.wheelDelta);
      // event.srcElement.style.setProperty('transition', 'all 200ms ease-in')
      // event.srcElement.style.setProperty('transform', "scale(" + this.i + 1 + ")")
    }
    if (event.wheelDelta < 0) {
      console.log(event.wheelDelta);
      // event.srcElement.style.setProperty('transition', 'all 200ms ease-out')
      // event.srcElement.style.setProperty('transform', +"scale(" + this.i - 1 + ")")
    }
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event) {
    console.log(event.touches[0].clientY);
  }


}
