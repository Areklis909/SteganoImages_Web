import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteganoDecodeAggComponent } from './stegano-decode-agg.component';

describe('SteganoDecodeAggComponent', () => {
  let component: SteganoDecodeAggComponent;
  let fixture: ComponentFixture<SteganoDecodeAggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteganoDecodeAggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteganoDecodeAggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
