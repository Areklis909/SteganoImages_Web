import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { serverUrl } from '../stegano-dropbox/messages';

@Component({
  selector: 'app-stegano-dropbox-encode',
  templateUrl: './stegano-dropbox-encode.component.html',
  styleUrls: ['./stegano-dropbox-encode.component.scss']
})
export class SteganoDropboxEncodeComponent implements OnInit {

  @Input() textToEncode: string;
  encodeApi = '/encode';
  resultImage: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public dropped(event: any): void {

    if (event.dataTransfer.files.length === 0) {
      return;
    }

    const formMsg = new FormData();
    console.log(event.dataTransfer.files[0]);
    const file = event.dataTransfer.files[0];
    formMsg.append('image', file, file.name);
    formMsg.append('msg', this.textToEncode);

    this.resultImage = this.http.post<any>(`${serverUrl}${this.encodeApi}`, formMsg).pipe(
      catchError((err) => {
        return of(err);
      })
    );

    this.resultImage.subscribe((image: any) => {
      console.log(image);
    });
  }

}
