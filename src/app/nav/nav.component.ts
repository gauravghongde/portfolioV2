import { Component, OnInit } from '@angular/core';
import { hamburgerIconAnim } from '../animations';
import { NavItem, NAV_ITEMS } from '../config';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [hamburgerIconAnim],
})
export class NavComponent implements OnInit {

  public isMenuTriggered = false;
  public navItems: NavItem[] = NAV_ITEMS;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isMenuTriggered = !this.isMenuTriggered;
  }

}
