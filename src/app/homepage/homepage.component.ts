import { Component, OnInit } from '@angular/core';
import { fileConfig, Social, socialLinkBaseURL, socialSites } from '../config';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']

})
export class HomepageComponent implements OnInit {

  public baseUrl: string = socialLinkBaseURL;
  public fileConfig: string = fileConfig;
  public socialSites: Social[] = socialSites;

  constructor() { }

  ngOnInit() {
  }

}
