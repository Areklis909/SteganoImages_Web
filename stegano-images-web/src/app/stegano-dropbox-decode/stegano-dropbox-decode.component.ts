import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverUrl } from '../stegano-dropbox/messages';
import { SteganoConnectorService } from '../stegano-connector.service';

@Component({
  selector: 'app-stegano-dropbox-decode',
  templateUrl: './stegano-dropbox-decode.component.html',
  styleUrls: ['./stegano-dropbox-decode.component.scss']
})
export class SteganoDropboxDecodeComponent implements OnInit {

  decodeApi = '/decode';
  resultImage: Observable<any>;

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
        Accept : '*/*'
      }),
      observe: 'response' as const, // to access the headers
      responseType: 'text' as 'json' // important to get response as a binary blob
    };

    this.http.post<string>(`${serverUrl}${this.decodeApi}`, formMsg, httpOptions).subscribe((resp) => {
      this.connector.decodedMessageSubject.next(resp.body);
    });
  }


}
