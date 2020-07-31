import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteganoEncodeComponent } from './stegano-encode.component';

describe('SteganoEncodeComponent', () => {
  let component: SteganoEncodeComponent;
  let fixture: ComponentFixture<SteganoEncodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteganoEncodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteganoEncodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
