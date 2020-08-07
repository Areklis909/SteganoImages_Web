import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteganoDropboxDecodeComponent } from './stegano-dropbox-decode.component';

describe('SteganoDropboxDecodeComponent', () => {
  let component: SteganoDropboxDecodeComponent;
  let fixture: ComponentFixture<SteganoDropboxDecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteganoDropboxDecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteganoDropboxDecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
