import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import { EMAIL_ID, FB_TEXT_PARAM, FORM_URL, MOBILE_NUMBER } from '../config';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public mobileNumber: string = MOBILE_NUMBER;
  public emailId: string = EMAIL_ID;
  public feedbackFormGroup: FormGroup;
  public submitted: boolean = false;
  public loading: boolean = false;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.feedbackFormGroup = new FormGroup({
      feedbackText: new FormControl(null, [Validators.required]),
      rating: new FormControl()
    });
    if (localStorage.getItem('isFBSubmitted') === 'true') {
      this.submitted = true;
    }
  }

  public submit() {
    const dataToSend = this.feedbackFormGroup.get('feedbackText').value;
    if (dataToSend != null && dataToSend.length > 0) {
      this.loading = true;
      const fbBody = new FormData;
      fbBody.append(FB_TEXT_PARAM, dataToSend);
      this.commonService.postMethodWithOptions(FORM_URL, fbBody, { responseType: 'text/html' }).subscribe(
        (resp: any) => {
          this.submitted = true;
          localStorage.setItem('isFBSubmitted', 'true');
          this.loading = false;
          console.log("resp", resp);
        },
        (err: any) => {
          this.submitted = true;
          localStorage.setItem('isFBSubmitted', 'true');
          this.loading = false;
          console.log("err", err);
        }
      );
    }
  }
}
