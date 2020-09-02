import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SteganoConnectorService } from '../stegano-connector.service';

@Component({
  selector: 'app-stegano-body',
  templateUrl: './stegano-body.component.html',
  styleUrls: ['./stegano-body.component.scss']
})
export class SteganoBodyComponent implements OnInit {

  drawerOpened = false;
  hideHeaderBar = false;
  display = '';

  constructor(private router: Router,
              private connector: SteganoConnectorService) { }

  ngOnInit(): void {
    this.connector.hideHeaderBar.subscribe((hide) => {
      if (hide) {
        this.display = 'none';
      } else {
        this.display = '';
      }
    });
  }

  public menuClicked(): void {
  }

  public arrowDownClicked(): void {
    this.router.navigate(['/about']);
  }

}
