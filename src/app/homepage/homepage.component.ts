import { Component, OnInit } from '@angular/core';
import { BIO, CURRENT_ORG, fileConfig, NAME, Social, socialLinkBaseURL, socialSites } from '../config';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']

})
export class HomepageComponent implements OnInit {

  public baseUrl: string = socialLinkBaseURL;
  public fileConfig: string = fileConfig;
  public socialSites: Social[] = socialSites;

  public name: string = NAME;
  public bio: string = BIO;
  public currentOrg: string = CURRENT_ORG;

  constructor() { }

  ngOnInit() {
  }

}
