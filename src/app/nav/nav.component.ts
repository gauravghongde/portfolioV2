import { Component, OnInit } from '@angular/core';
import { hamburgerIconAnim } from '../animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [hamburgerIconAnim],
})
export class NavComponent implements OnInit {

  public isMenuTriggered = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isMenuTriggered = !this.isMenuTriggered;
  }

}
