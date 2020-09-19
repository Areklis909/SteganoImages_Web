import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DecodedMessage } from './interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class SteganoConnectorService {

  public menuToggleSubject = new Subject<boolean>();
  public decodedMessageSubject = new Subject<string>();
  public showSpinner = new Subject<boolean>();
  public headerTitleSubject = new Subject<string>();
  public elementDroppedOnEncode = new Subject<boolean>();
  public hideHeaderBar = new Subject<boolean>();

  constructor() { }
}
