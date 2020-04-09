import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArtGalleryComponent } from './pages/art-gallery/art-gallery.component';
import { CodeGalleryComponent } from './pages/code-gallery/code-gallery.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent, data: {animation: 'home'} },
  { path: 'art', component: ArtGalleryComponent, data: {animation: 'art'}},
  { path: 'code', component: CodeGalleryComponent, data: {animation: 'code'}},
  { path: 'about', component: AboutPageComponent, data: {animation: 'about'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
