import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-stegano-panel',
  templateUrl: './stegano-panel.component.html',
  styleUrls: ['./stegano-panel.component.scss']
})
export class SteganoPanelComponent implements OnInit {

  constructor() { }


  public color: ThemePalette = 'primary';

  ngOnInit(): void {
  }

}
