import { Component, OnInit } from '@angular/core';
import { SteganoConnectorService } from '../stegano-connector.service';

@Component({
  selector: 'app-stegano-encode-agg',
  templateUrl: './stegano-encode-agg.component.html',
  styleUrls: ['./stegano-encode-agg.component.scss']
})
export class SteganoEncodeAggComponent implements OnInit {

  readonly encodeStr = 'Encode';

  constructor(private connector: SteganoConnectorService) { }

  ngOnInit(): void {
    this.connector.headerTitleSubject.next(this.encodeStr);
  }

}
