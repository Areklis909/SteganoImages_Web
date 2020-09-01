import { Component, OnInit } from '@angular/core';
import { SteganoConnectorService } from '../stegano-connector.service';

@Component({
  selector: 'app-stegano-about-agg',
  templateUrl: './stegano-about-agg.component.html',
  styleUrls: ['./stegano-about-agg.component.scss']
})
export class SteganoAboutAggComponent implements OnInit {

  readonly aboutStr = 'About';

  constructor(private connector: SteganoConnectorService) { }

  ngOnInit(): void {
    this.connector.headerTitleSubject.next(this.aboutStr);
  }

}
