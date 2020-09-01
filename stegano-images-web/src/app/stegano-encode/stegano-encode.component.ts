import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { SteganoConnectorService } from '../stegano-connector.service';

@Component({
  selector: 'app-stegano-encode',
  templateUrl: './stegano-encode.component.html',
  styleUrls: ['./stegano-encode.component.scss']
})
export class SteganoEncodeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private connector: SteganoConnectorService) { }

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  spinnerMode: ProgressSpinnerMode = 'indeterminate';
  showSpinner = false;
  readonly emptyString = '';

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: [this.emptyString, Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: [this.emptyString, Validators.required]
    });

    this.connector.elementDroppedOnEncode.subscribe(dropped => {
      this.showSpinner = dropped;
    })
  }
}
