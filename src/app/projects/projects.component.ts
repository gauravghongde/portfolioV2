import { Component, OnInit } from '@angular/core';
import { Project, PROJECTS } from '../config';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[] = PROJECTS;

  constructor() { }

  ngOnInit() {
  }

}
