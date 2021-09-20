import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArtGalleryComponent } from './pages/art-gallery/art-gallery.component';
import { BasePageComponent } from './pages/base-page.component';
import { CodeGalleryComponent } from './pages/code-gallery/code-gallery.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { FilterPanelComponent } from './ui-components/filter-panel/filter-panel.component';
import { TooltipComponent } from './ui-components/tooltip/tooltip.component';
import { AnimateOnScrollDirective } from './directives/animate-on-scroll.directive';
import { ResourceMissingPageComponent } from './pages/resource-missing-page/resource-missing-page.component';
import { CheckboxComponent } from './ui-components/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ArtGalleryComponent,
    BasePageComponent,
    CodeGalleryComponent,
    AboutPageComponent,
    FilterPanelComponent,
    TooltipComponent,
    AnimateOnScrollDirective,
    ResourceMissingPageComponent,
    CheckboxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DeviceDetectorModule.forRoot(),
    HammerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
