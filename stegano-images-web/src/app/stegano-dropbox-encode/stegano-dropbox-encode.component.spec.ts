import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteganoDropboxEncodeComponent } from './stegano-dropbox-encode.component';

describe('SteganoDropboxEncodeComponent', () => {
  let component: SteganoDropboxEncodeComponent;
  let fixture: ComponentFixture<SteganoDropboxEncodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteganoDropboxEncodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteganoDropboxEncodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
