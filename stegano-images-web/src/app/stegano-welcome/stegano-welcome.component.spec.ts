import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteganoWelcomeComponent } from './stegano-welcome.component';

describe('SteganoWelcomeComponent', () => {
  let component: SteganoWelcomeComponent;
  let fixture: ComponentFixture<SteganoWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteganoWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteganoWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
