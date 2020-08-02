import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteganoAboutComponent } from './stegano-about.component';

describe('SteganoAboutComponent', () => {
  let component: SteganoAboutComponent;
  let fixture: ComponentFixture<SteganoAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteganoAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteganoAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
