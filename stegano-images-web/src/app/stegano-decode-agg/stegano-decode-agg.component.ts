import { Component, OnInit } from '@angular/core';
import { SteganoConnectorService } from '../stegano-connector.service';

@Component({
  selector: 'app-stegano-decode-agg',
  templateUrl: './stegano-decode-agg.component.html',
  styleUrls: ['./stegano-decode-agg.component.scss']
})
export class SteganoDecodeAggComponent implements OnInit {

  readonly decodeStr = 'Decode';

  constructor(private connector: SteganoConnectorService) { }

  ngOnInit(): void {
    this.connector.headerTitleSubject.next(this.decodeStr);

  }

}
