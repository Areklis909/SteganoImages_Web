import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteganoEncodeAggComponent } from './stegano-encode-agg.component';

describe('SteganoEncodeAggComponent', () => {
  let component: SteganoEncodeAggComponent;
  let fixture: ComponentFixture<SteganoEncodeAggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteganoEncodeAggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteganoEncodeAggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
