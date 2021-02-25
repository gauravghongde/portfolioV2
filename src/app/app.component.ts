import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import curDot from "cursor-dot-v2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'portfolioV2';

  ngOnInit(): void {
    setTimeout(()=> this.applyCursor(), 1000);
  }

  applyCursor() {
    console.log("Am I too early");
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
      scale: 1,
      background: "#faa2c1",
      borderColor: "transparent"
    });

    cursor.over(".text-content", {
      scale: 5,
      background: "#fff"
    });

    cursor.over(".cursor-link", {
      scale: 2.5,
      background: "#faa2c1",
      borderColor: "transparent"
    });

    cursor.over("a", {
      scale: 2.5,
      background: "#faa2c1",
      borderColor: "transparent"
    });

    cursor.over(".btn", {
      scale: 2.5,
      background: "#faa2c1",
      borderColor: "transparent"
    });

  }

  ngAfterViewChecked() {

  }

}
