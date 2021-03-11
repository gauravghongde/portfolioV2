import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import curDot from "cursor-dot-v2";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private cursor: curDot;

  constructor(private httpClient: HttpClient) { }

  public postMethodWithOptions(url: string, requestBody: any, options: any): Observable<any> {
    return this.httpClient.post(url, requestBody, options);
  }

  public setCursor() {
    console.log("Am I too early");
    this.cursor = curDot({
      zIndex: 100,
      diameter: 30,
      easing: 4
    });
    this.applyCursor();
  }

  public applyCursor() {
    setTimeout(() => {
      this.cursor.over(".title", {
        scale: 5,
        background: "#fff"
      });

      this.cursor.over(".cursor-btn", {
        scale: 0.5,
        background: "#fff",
        borderColor: "transparent"
      });

      this.cursor.over(".social-icon-container", {
        scale: 1,
        background: "#faa2c1",
        borderColor: "transparent"
      });

      this.cursor.over(".text-content", {
        scale: 5,
        background: "#fff"
      });

      this.cursor.over(".cursor-link", {
        scale: 2.5,
        background: "#faa2c1",
        borderColor: "transparent"
      });

      this.cursor.over("a", {
        scale: 2.5,
        background: "#faa2c1",
        borderColor: "transparent"
      });

      this.cursor.over(".btn", {
        scale: 2.5,
        background: "#faa2c1",
        borderColor: "transparent"
      });
    }, 500);
  }
}
