import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteganoDropboxComponent } from './stegano-dropbox.component';

describe('SteganoDropboxComponent', () => {
  let component: SteganoDropboxComponent;
  let fixture: ComponentFixture<SteganoDropboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteganoDropboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteganoDropboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
