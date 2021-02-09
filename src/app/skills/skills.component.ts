import { Component, OnInit } from '@angular/core';
import { skills, Skill } from '../config';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skills: Skill[] = skills;

  constructor() { }

  ngOnInit() {
  }

}
