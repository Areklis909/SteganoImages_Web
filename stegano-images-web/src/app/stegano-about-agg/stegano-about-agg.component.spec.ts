import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteganoAboutAggComponent } from './stegano-about-agg.component';

describe('SteganoAboutAggComponent', () => {
  let component: SteganoAboutAggComponent;
  let fixture: ComponentFixture<SteganoAboutAggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteganoAboutAggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteganoAboutAggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
