import { Component, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stegano-dropbox',
  templateUrl: './stegano-dropbox.component.html',
  styleUrls: ['./stegano-dropbox.component.scss']
})
export class SteganoDropboxComponent implements AfterViewInit {

  @ViewChild('dropbox') dropbox: ElementRef;
  @Output() ondrop: EventEmitter<any> = new EventEmitter();
  readonly activeClass = 'active';
  readonly idleClass = 'idle';

  constructor() { }

  ngAfterViewInit(): void { }

  private dropboxIdle(): void {
    this.dropboxClassOperation(this.activeClass, this.idleClass);
  }

  private dropboxActive(): void {
    this.dropboxClassOperation(this.idleClass, this.activeClass);
  }

  private dropboxClassOperation(oldClass: string, newClass: string): void {
    if (this.dropbox.nativeElement.classList.contains(oldClass)) {
      this.dropbox.nativeElement.classList.remove(oldClass)
    }
    this.dropbox.nativeElement.classList.add(newClass);
  }

  private handleDragFamilyEvent(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  public handleDragEnter(event: Event): void {

    this.handleDragFamilyEvent(event);
    this.dropboxActive();
  }

  public handleDragOver(event: Event): void {

    this.handleDragFamilyEvent(event);
  }

  public handleDragLeave(event: Event): void {

    this.handleDragFamilyEvent(event);
    this.dropboxIdle();
  }

  public handleDrop(event: any): void {

    this.handleDragFamilyEvent(event);
    this.dropboxIdle();
    this.ondrop.emit(event);
  }

}
