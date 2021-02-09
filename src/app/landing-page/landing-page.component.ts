import { Component, OnInit } from '@angular/core';
import curDot from "cursor-dot-v2";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const cursor = curDot({
      zIndex: 100,
      diameter: 30,
      easing: 4
    });

    cursor.over(".title", {
      scale: 5,
      background: "#fff"
    });

    cursor.over(".cursor-btn", {
      scale: 0.5,
      background: "#fff",
      borderColor: "transparent"
    });

    cursor.over(".social-icon-container", {
      background: "#faa2c1",
      borderColor: "transparent"
    });

    cursor.over(".text-content", {
      scale: 5,
      background: "#fff"
    });

    cursor.over("li", {
      scale: 2.5,
      background: "#faa2c1",
      borderColor: "transparent"
    });
  }

}
