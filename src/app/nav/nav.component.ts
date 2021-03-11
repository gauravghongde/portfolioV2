import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hamburgerIconAnim } from '../animations';
import { CommonService } from '../common.service';
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

  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit() {
  }

  navToggle() {
    this.isMenuTriggered = !this.isMenuTriggered;
  }

  colorWheelClicked() {
    localStorage.setItem(ColorKind.Primary, THEME_COLORS[Math.floor(Math.random() * THEME_COLORS.length)]);
    window.location.reload();
  }

  navEntryClicked(redirectUrl: string) {
    this.router.navigate(['/' + redirectUrl]).then(() => {
      this.commonService.applyCursor();
      this.navToggle();
    });
  }

}
