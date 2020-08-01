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

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
