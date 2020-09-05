import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { serverUrl } from '../stegano-dropbox/messages';
import { SteganoConnectorService } from '../stegano-connector.service';
import { DecodedMessage } from '../interfaces/interfaces';

@Component({
  selector: 'app-stegano-dropbox-decode',
  templateUrl: './stegano-dropbox-decode.component.html',
  styleUrls: ['./stegano-dropbox-decode.component.scss']
})
export class SteganoDropboxDecodeComponent implements OnInit {

  decodeApi = '/decode';
  constructor(private http: HttpClient,
              private connector: SteganoConnectorService) { }

  ngOnInit(): void {
  }

  public dropped(event: any): void {

    if (event.dataTransfer.files.length === 0) {
      return;
    }

    this.connector.elementDroppedOnDecode.next(true);

    const formMsg = new FormData();
    const file = event.dataTransfer.files[0];
    formMsg.append('image', file, file.name);

    const httpOptions = {
      headers: new HttpHeaders({
        Accept : 'application/json'
      }),
      observe: 'response' as const, // to access the headers
      responseType: 'json' as const // important to get response as a binary blob
    };

    this.http.post<DecodedMessage>(`${serverUrl}${this.decodeApi}`, formMsg, httpOptions).subscribe((resp) => {
      this.connector.decodedMessageSubject.next(resp.body);
    });
  }


}
