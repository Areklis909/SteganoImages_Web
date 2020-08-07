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
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { SteganoDropboxComponent } from './stegano-dropbox/stegano-dropbox.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SteganoDecodeComponent } from './stegano-decode/stegano-decode.component';
import { SteganoAboutComponent } from './stegano-about/stegano-about.component';
import { SteganoWelcomeComponent } from './stegano-welcome/stegano-welcome.component';
import { SteganoEncodeAggComponent } from './stegano-encode-agg/stegano-encode-agg.component';
import { SteganoDecodeAggComponent } from './stegano-decode-agg/stegano-decode-agg.component';
import { SteganoAboutAggComponent } from './stegano-about-agg/stegano-about-agg.component';
import { HttpClientModule } from '@angular/common/http';
import { SteganoDropboxEncodeComponent } from './stegano-dropbox-encode/stegano-dropbox-encode.component';
import { SteganoDropboxDecodeComponent } from './stegano-dropbox-decode/stegano-dropbox-decode.component';

@NgModule({
  declarations: [
    AppComponent,
    SteganoBodyComponent,
    SteganoPanelComponent,
    SteganoHeaderComponent,
    SteganoEncodeComponent,
    SteganoDropboxComponent,
    SteganoDecodeComponent,
    SteganoAboutComponent,
    SteganoWelcomeComponent,
    SteganoEncodeAggComponent,
    SteganoDecodeAggComponent,
    SteganoAboutAggComponent,
    SteganoDropboxEncodeComponent,
    SteganoDropboxDecodeComponent
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
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
