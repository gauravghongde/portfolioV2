import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.yPosition.subscribe(x => {
    //   console.log('firstname value changed')
    //   console.log(x)
    // })
  }

}
