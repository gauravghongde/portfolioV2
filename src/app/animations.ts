import { animate, state, style, transition, trigger } from '@angular/animations';

export const hamburgerIconAnim = trigger('hamburgerX', [
  state('hamburger', style({})),
  state('topX', style({
    transform: 'rotate(45deg)',
    transformOrigin: 'left',
    margin: '6px'
  })),
  state('hide', style({
    opacity: 0
  })),
  state('bottomX', style({
    transform: 'rotate(-45deg)',
    transformOrigin: 'left',
    margin: '6px'
  })),
  transition('* => *', [
    animate('0.2s')
  ]),
]);
