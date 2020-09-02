import { Component, OnInit } from '@angular/core';
import { SteganoConnectorService } from '../stegano-connector.service';

@Component({
  selector: 'app-stegano-welcome',
  templateUrl: './stegano-welcome.component.html',
  styleUrls: ['./stegano-welcome.component.scss']
})
export class SteganoWelcomeComponent implements OnInit {

  constructor(private connector: SteganoConnectorService) { }
  ngOnInit(): void {
    setTimeout( () => {
      this.connector.hideHeaderBar.next(true);
    });
  }

}
