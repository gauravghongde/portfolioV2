import { Component, OnInit } from '@angular/core';
import { resumeSourcePDF } from '../config';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public pdfSource = resumeSourcePDF;

  constructor() { }

  ngOnInit() { }

}
