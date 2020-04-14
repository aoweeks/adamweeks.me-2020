import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArtGalleryComponent } from './pages/art-gallery/art-gallery.component';
import { BasePageComponent } from './pages/base-page.component';
import { CodeGalleryComponent } from './pages/code-gallery/code-gallery.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { FilterPanelComponent } from './ui-components/filter-panel/filter-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ArtGalleryComponent,
    BasePageComponent,
    CodeGalleryComponent,
    AboutPageComponent,
    FilterPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
