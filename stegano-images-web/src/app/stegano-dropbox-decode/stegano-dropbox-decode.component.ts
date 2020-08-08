import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Message, serverUrl } from '../stegano-dropbox/messages';

@Component({
  selector: 'app-stegano-dropbox-decode',
  templateUrl: './stegano-dropbox-decode.component.html',
  styleUrls: ['./stegano-dropbox-decode.component.scss']
})
export class SteganoDropboxDecodeComponent implements OnInit {

  decodeApi = '/decode';
  resultImage: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public dropped(event: any): void {

    if (event.dataTransfer.files.length === 0) {
      return;
    }

    const msg: Message = {
      file: event.dataTransfer.files[0]
    };

    const opts = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data'
      })
    };

    this.resultImage = this.http.post<any>(`${serverUrl}${this.decodeApi}`, msg, opts).pipe(
      catchError((err) => {
        return of(err);
      })
    );

    this.resultImage.subscribe((image: any) => {
      console.log(image);
    });
  }

}
