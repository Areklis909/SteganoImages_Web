import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SteganoConnectorService {

  public menuToggleSubject = new Subject<boolean>();
  public decodedMessageSubject = new Subject<string>();
  public elementDropped = new Subject<boolean>();
  public headerTitleSubject = new Subject<string>();

  constructor() { }
}
