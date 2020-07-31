import { Component, OnInit } from '@angular/core';
import { SteganoConnectorService } from '../stegano-connector.service';

@Component({
  selector: 'app-stegano-body',
  templateUrl: './stegano-body.component.html',
  styleUrls: ['./stegano-body.component.scss']
})
export class SteganoBodyComponent implements OnInit {

  drawerOpened = false;

  constructor(private steganoConnector: SteganoConnectorService) { }

  ngOnInit(): void {
    this.steganoConnector.menuToggleSubject.subscribe((menuVisible: boolean) => {
      this.drawerOpened = menuVisible;
    });
  }

  public menuClicked(): void {
    console.log('Menu toggle');
  }

  public arrowDownClicked(): void {
    console.log('Arrow down clicked');
  }

}
