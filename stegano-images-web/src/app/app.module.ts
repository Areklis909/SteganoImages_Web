import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SteganoBodyComponent } from './stegano-body/stegano-body.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SteganoPanelComponent } from './stegano-panel/stegano-panel.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SteganoHeaderComponent } from './stegano-header/stegano-header.component';
import { SteganoEncodeComponent } from './stegano-encode/stegano-encode.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SteganoDropboxComponent } from './stegano-dropbox/stegano-dropbox.component';

@NgModule({
  declarations: [
    AppComponent,
    SteganoBodyComponent,
    SteganoPanelComponent,
    SteganoHeaderComponent,
    SteganoEncodeComponent,
    SteganoDropboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
