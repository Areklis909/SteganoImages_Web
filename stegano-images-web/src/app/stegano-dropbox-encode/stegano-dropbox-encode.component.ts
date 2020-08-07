import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EncodeMessage } from '../stegano-dropbox/messages';

@Component({
  selector: 'app-stegano-dropbox-encode',
  templateUrl: './stegano-dropbox-encode.component.html',
  styleUrls: ['./stegano-dropbox-encode.component.scss']
})
export class SteganoDropboxEncodeComponent implements OnInit {

  @Input() textToEncode: string;
  serverUrl = '/encode';
  resultImage: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public dropped(event: any): void {

    if (event.dataTransfer.files.length === 0) {
      return;
    }

    const msg: EncodeMessage = {
      file: { file: event.dataTransfer.files[0] },
      message: this.textToEncode
    };

    const opts = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data'
      })
    };

    this.resultImage = this.http.post<any>(this.serverUrl, msg, opts).pipe(
      catchError((err) => {
        return of(err);
      })
    );

    this.resultImage.subscribe((image: any) => {
      console.log(image);
    });
  }

}
