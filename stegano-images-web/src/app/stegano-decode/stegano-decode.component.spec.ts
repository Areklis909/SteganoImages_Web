import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteganoDecodeComponent } from './stegano-decode.component';

describe('SteganoDecodeComponent', () => {
  let component: SteganoDecodeComponent;
  let fixture: ComponentFixture<SteganoDecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteganoDecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteganoDecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
