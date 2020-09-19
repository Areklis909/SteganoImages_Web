import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { serverUrl } from '../stegano-dropbox/messages';
import { SteganoConnectorService } from '../stegano-connector.service';

@Component({
  selector: 'app-stegano-dropbox-encode',
  templateUrl: './stegano-dropbox-encode.component.html',
  styleUrls: ['./stegano-dropbox-encode.component.scss']
})
export class SteganoDropboxEncodeComponent implements OnInit {

  @Input() textToEncode: string;
  readonly encodeApi = '/encode';
  readonly removeApi = '/remove';
  readonly contentDisposition = 'Content-Disposition';

  constructor(private http: HttpClient,
              private connector: SteganoConnectorService) { }

  ngOnInit(): void {
  }

  private getFilenameFromHeader(header: string): string {
    return header.split('=')[1];
  }

  public dropped(event: any): void {

    if (event.dataTransfer.files.length === 0) {
      return;
    }

    this.connector.elementDroppedOnEncode.next(true);

    const formMsg = new FormData();
    const file = event.dataTransfer.files[0];
    formMsg.append('image', file, file.name);
    formMsg.append('msg', this.textToEncode);

    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'image/*'
      }),
      observe: 'response' as const, // to access the headers
      responseType: 'blob' as 'json' // important to get response as a binary blob
    };

    this.http.post<any>(`${serverUrl}${this.encodeApi}`, formMsg, httpOptions).subscribe(
    (response) => {
      const link = document.createElement('a');
      link.download = this.getFilenameFromHeader(response.headers.get(this.contentDisposition));
      link.href = URL.createObjectURL(response.body);
      link.click();
      this.connector.elementDroppedOnEncode.next(false);
    },
    (err) => {
      console.log(err);
    }
    );
  }

}
