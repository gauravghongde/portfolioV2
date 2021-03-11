import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project, PROJECTS } from 'src/app/config';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  public projectTitle: string;
  public currentIndex: number;
  public nextIndex: number;
  public totalProjects: number = PROJECTS.length;
  public currentProject: Project;
  public nextProjectRouteId: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.projectTitle = param.pId;
      console.log(this.projectTitle);
    });

    this.currentIndex = PROJECTS.findIndex(project => this.projectTitle === project.title);
    this.currentProject = PROJECTS[this.currentIndex];
    console.log(this.currentIndex, this.currentProject);

    this.nextIndex = ((this.currentIndex + 1) % this.totalProjects);
    this.nextProjectRouteId = PROJECTS[this.nextIndex].title;
  }

  public linkClicked(url: string, openInNewTab: boolean = false) {
    if (openInNewTab) {
      window.open(url,'_blank');
    } else {
      window.open(url);
    }
  }
}
