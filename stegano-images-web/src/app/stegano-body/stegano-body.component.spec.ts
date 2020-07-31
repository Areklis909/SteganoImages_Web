import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteganoBodyComponent } from './stegano-body.component';

describe('SteganoBodyComponent', () => {
  let component: SteganoBodyComponent;
  let fixture: ComponentFixture<SteganoBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteganoBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteganoBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
