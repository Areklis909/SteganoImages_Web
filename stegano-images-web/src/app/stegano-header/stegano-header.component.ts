import { Component, OnInit } from '@angular/core';
import { SteganoConnectorService } from '../stegano-connector.service';

@Component({
  selector: 'app-stegano-header',
  templateUrl: './stegano-header.component.html',
  styleUrls: ['./stegano-header.component.scss']
})
export class SteganoHeaderComponent implements OnInit {

  private menuVisible = true;
  public header = '';

  constructor(private steganoConnector: SteganoConnectorService) { }

  ngOnInit(): void {
    this.steganoConnector.headerTitleSubject.subscribe((headerString) => {
      this.header = headerString;
    });
  }

  public toggleMenu(): void {
    this.steganoConnector.menuToggleSubject.next(this.menuVisible);
    this.menuVisible = !this.menuVisible;
  }

}
