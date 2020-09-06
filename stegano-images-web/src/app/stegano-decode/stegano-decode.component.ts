import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SteganoConnectorService } from '../stegano-connector.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-stegano-decode',
  templateUrl: './stegano-decode.component.html',
  styleUrls: ['./stegano-decode.component.scss']
})
export class SteganoDecodeComponent implements OnInit {

  public decodedMessage = '';
  public message = '';
  public messageReceived = false;
  public dropped = false;
  public respOk = true;
  public msgColor = '';
  public spinnerMode: ProgressSpinnerMode = 'indeterminate';
  public hideDecodedMessage = true;
  public allDots = '';
  public showHideTooltip = '';
  readonly alarmColor = 'red';
  readonly blackCircleSign = '●';
  readonly showStr = 'Show';
  readonly hideStr = 'Hide';

  constructor(private connector: SteganoConnectorService) { }

  ngOnInit(): void {
    this.connector.elementDroppedOnDecode.subscribe(dropped => {
      this.dropped = true;
    });

    this.connector.decodedMessageSubject.subscribe(response => {
      this.dropped = false;
      this.messageReceived = true;
      this.message = response.text;
      this.respOk = (response.code === 200);
      this.msgColor = (response.code === 200) ? '' : this.alarmColor;
      if (response.code !== 200) {
        this.hideDecodedMessage = false;
      }
      this.allDots = Array(this.message.length + 1).join(this.blackCircleSign);
      this.decodedMessage = this.hideDecodedMessage ? this.allDots : this.message;
      console.log(this.message.length);
      console.log(this.message);
      console.log(this.allDots);
    });
  }

  public showHide(): void {
    this.hideDecodedMessage = !this.hideDecodedMessage;
    if(this.hideDecodedMessage === true) {
      this.showHideTooltip = this.showStr;
      this.decodedMessage = this.allDots;
    } else {
      this.showHideTooltip = this.hideStr;
      this.decodedMessage = this.message;
    }
  }

  public copyMessage(): void {
    const messageArea = document.createElement('textarea');
    messageArea.style.position = 'fixed';
    messageArea.style.left = '0';
    messageArea.style.top = '0';
    messageArea.style.opacity = '0';
    messageArea.value = this.message;
    document.body.appendChild(messageArea);
    messageArea.focus();
    messageArea.select();
    messageArea.setSelectionRange(0, this.message.length);
    document.execCommand('copy');
    document.body.removeChild(messageArea);
  }

}
