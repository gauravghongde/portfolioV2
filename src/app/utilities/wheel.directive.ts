
import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
@Directive({
  selector: '[wheel]'
})

export class WheelDirective {

  @Output() mouseWheelUp = new EventEmitter();
  @Output() mouseWheelDown = new EventEmitter();
  @Output() touchScroll = new EventEmitter();

  i: number = 1;

  constructor() { }

  @HostListener('mousewheel', ['$event'])
  onMousewheel(event) {
    this.mouseWheelFunc(event);
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event) {
    // console.log(event.touches[0].clientY);
    this.touchScroll.emit(event);
  }

  private mouseWheelFunc(event: any) {
    var event = window.event || event; // old IE support
    var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    if (delta > 0) {
      this.mouseWheelUp.emit(event);
    } else if (delta < 0) {
      this.mouseWheelDown.emit(event);
    }
    // for IE
    event.returnValue = false;
    // for Chrome and Firefox
    if (event.preventDefault) {
      event.preventDefault();
    }
  }


}
