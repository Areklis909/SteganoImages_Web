import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteganoHeaderComponent } from './stegano-header.component';

describe('SteganoHeaderComponent', () => {
  let component: SteganoHeaderComponent;
  let fixture: ComponentFixture<SteganoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteganoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteganoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
