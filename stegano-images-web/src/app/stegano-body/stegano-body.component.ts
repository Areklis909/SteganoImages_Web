import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stegano-body',
  templateUrl: './stegano-body.component.html',
  styleUrls: ['./stegano-body.component.scss']
})
export class SteganoBodyComponent implements OnInit {

  drawerOpened = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public menuClicked(): void {
  }

  public arrowDownClicked(): void {
    this.router.navigate(['/about']);
    // const goToBody = document.createElement('a');
    // goToBody.href = '#body';
    // goToBody.click();
  }

}
