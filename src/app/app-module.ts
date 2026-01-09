import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Team } from './pages/team/team';
import { Gallery } from './pages/gallery/gallery';
import { Contact } from './pages/contact/contact';
import { Navbar } from './core/navbar/navbar';
import { Footer } from './core/footer/footer';
import { Lightbox } from './shared/lightbox/lightbox';
import { NgxLeafletModule } from 'ngx-leaflet';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { GalleryCollection } from './pages/gallery-collection/gallery-collection';
import { RouterModule } from '@angular/router';
import { ImageDetail } from './pages/image-detail/image-detail';


@NgModule({
  declarations: [
    App,
    Home,
    About,
    Team,
    Navbar,
    Footer,
    Lightbox,
    
    ],
  imports: [
CommonModule,
    BrowserModule,
    Contact,
    ImageDetail,
    AppRoutingModule,
    GalleryCollection,
    GoogleMapsModule,
    FormsModule,
  
    
    ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
