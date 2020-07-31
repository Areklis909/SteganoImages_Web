import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteganoPanelComponent } from './stegano-panel.component';

describe('SteganoPanelComponent', () => {
  let component: SteganoPanelComponent;
  let fixture: ComponentFixture<SteganoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteganoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteganoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
