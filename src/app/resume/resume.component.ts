import { Component, OnInit } from '@angular/core';
import { resumeSourcePDF, resumeDownloadPDF } from '../config';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public pdfSource = resumeSourcePDF;
  public resumeDDL = resumeDownloadPDF;

  constructor() { }

  ngOnInit() { }

}
