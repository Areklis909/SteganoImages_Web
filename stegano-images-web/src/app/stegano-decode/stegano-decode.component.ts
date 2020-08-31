import { Component, OnInit } from '@angular/core';
import { SteganoConnectorService } from '../stegano-connector.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-stegano-decode',
  templateUrl: './stegano-decode.component.html',
  styleUrls: ['./stegano-decode.component.scss']
})
export class SteganoDecodeComponent implements OnInit {

  private decodedMessage = '';
  public messageReceived = false;
  public dropped = false;
  public spinnerMode: ProgressSpinnerMode = 'indeterminate';

  constructor(private connector: SteganoConnectorService) { }

  ngOnInit(): void {
    this.connector.elementDropped.subscribe(dropped => {
      this.dropped = true;
    });

    this.connector.decodedMessageSubject.subscribe(response => {
      this.decodedMessage = response;
      this.messageReceived = true;
      this.dropped = false;
    });
  }

}
