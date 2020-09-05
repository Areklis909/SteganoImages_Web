import { Component, OnInit } from '@angular/core';
import { SteganoConnectorService } from '../stegano-connector.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { DecodedMessage } from '../interfaces/interfaces';

@Component({
  selector: 'app-stegano-decode',
  templateUrl: './stegano-decode.component.html',
  styleUrls: ['./stegano-decode.component.scss']
})
export class SteganoDecodeComponent implements OnInit {

  public decodedMessage = '';
  public messageReceived = false;
  public dropped = false;
  public respOk = true;
  public msgColor = '';
  public spinnerMode: ProgressSpinnerMode = 'indeterminate';
  readonly alarmColor = 'red';

  constructor(private connector: SteganoConnectorService) { }

  ngOnInit(): void {
    this.connector.elementDroppedOnDecode.subscribe(dropped => {
      this.dropped = true;
    });

    this.connector.decodedMessageSubject.subscribe(response => {
      this.respOk = (response.code === 200);
      this.msgColor = (response.code === 200) ? '' : this.alarmColor;
      this.decodedMessage = response.text;
      this.messageReceived = true;
      this.dropped = false;
    });
  }

}
