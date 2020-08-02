import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-stegano-encode',
  templateUrl: './stegano-encode.component.html',
  styleUrls: ['./stegano-encode.component.scss']
})
export class SteganoEncodeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  readonly emptyString = '';

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: [this.emptyString, Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: [this.emptyString, Validators.required]
    });
  }
}
