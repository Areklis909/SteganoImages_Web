import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SteganoDecodeComponent } from './stegano-decode/stegano-decode.component';
import { SteganoAboutComponent } from './stegano-about/stegano-about.component';
import { SteganoEncodeAggComponent } from './stegano-encode-agg/stegano-encode-agg.component';
import { SteganoDecodeAggComponent } from './stegano-decode-agg/stegano-decode-agg.component';
import { SteganoAboutAggComponent } from './stegano-about-agg/stegano-about-agg.component';
import { SteganoWelcomeComponent } from './stegano-welcome/stegano-welcome.component';

const routes: Routes = [
  { path: 'enc', component: SteganoEncodeAggComponent },
  { path: 'dec', component: SteganoDecodeAggComponent },
  { path: 'about', component: SteganoAboutAggComponent },
  { path: '**', component:  SteganoWelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
