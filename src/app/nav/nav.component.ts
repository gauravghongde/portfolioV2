import { Component, OnInit } from '@angular/core';
import { hamburgerIconAnim } from '../animations';
import { ColorKind, NavItem, NAV_ITEMS, THEME_COLORS } from '../config';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [hamburgerIconAnim],
})
export class NavComponent implements OnInit {

  public isMenuTriggered = false;
  public navItems: NavItem[] = NAV_ITEMS;
  public isViewportVertical: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isMenuTriggered = !this.isMenuTriggered;
  }

  colorWheelClicked() {
    sessionStorage.setItem(ColorKind.Primary, THEME_COLORS[Math.floor(Math.random() * THEME_COLORS.length)]);
    window.location.reload();
  }

}
