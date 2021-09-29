import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from './common.service';
import { ColorKind, DEFAULT_ACCENT_COLOR, DEFAULT_PRIMARY_COLOR, DEFAULT_SECONDARY_COLOR, NavItem, NAV_ITEMS, ThemeColor, THEME_COLORS } from './config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  public title = 'portfolio';
  public counter = 0;
  public yPosition = 106;
  public currentIndex = 0;
  public nextIndex = 0;
  public nextRoute: NavItem = NAV_ITEMS[0];
  public primaryColor: string = DEFAULT_PRIMARY_COLOR;
  public accentColor: string = DEFAULT_ACCENT_COLOR;
  public subscriptions: Subscription[] = [];


  constructor(private router: Router, private meta: Meta, private commonService: CommonService) { }

  public ngOnDestroy(): void {
    this.subscriptions.map(sub => sub && sub.unsubscribe());
  }

  ngOnInit(): void {
    this.updateColors();
    const route$ = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        console.log("Router: ", e.url);
        this.currentIndex = NAV_ITEMS.findIndex(navItem => e.url === navItem.url);
        this.nextIndex = (this.currentIndex + 1) % NAV_ITEMS.length;
        this.nextRoute = NAV_ITEMS[this.nextIndex];
      }
    });
    this.subscriptions.push(route$);
    this.commonService.setCursor();
  }

  private updateColors() {
    if(localStorage.getItem(ColorKind.Primary) == null) {
      localStorage.setItem(ColorKind.Primary, DEFAULT_PRIMARY_COLOR);
    }
    this.primaryColor = localStorage.getItem(ColorKind.Primary);
    const themeColors = new Map([
      [ColorKind.Primary, this.primaryColor],
      [ColorKind.Accent, this.accentColor],
      [ColorKind.Secondary, this.accentColor+66],
    ]);

    Array.from(themeColors.entries()).forEach(([label, value]) => {
      document.body.style.setProperty(`--${label}`, value);
      if (label == ColorKind.Primary) {
        this.meta.updateTag({ name: 'theme-color', content: value });
      }
    });
  }

  public mouseWheelUpFunc(event: any) {
    // console.log(event.wheelDelta);
  }

  public mouseWheelDownFunc(event: any) {
    // console.log(event.wheelDelta);
    this.navigator(event.wheelDelta);
  }

  public touchScrollFunc(event: any) {
    console.log(event.touches[0].clientY);
    // this.navigator(event.touches[0].clientY);
  }

  private navigator(yPos: number) {
    this.counter = this.counter + 1;
    if (this.counter > 10) {
      clearTimeout(timer);
      window.location.href = this.nextRoute.url;
    }
    console.log(this.counter);
    this.yPosition = this.yPosition + yPos / 50;
    var timer = setTimeout(() => {
      this.counter = 0;
      this.yPosition = 106;
    }, 1000);
  }

  ngAfterViewChecked() {

  }

}
