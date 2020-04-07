import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArtGalleryComponent } from './pages/art-gallery/art-gallery.component';


const routes: Routes = [
  { path: '', component: HomePageComponent, data: {animation: 'right'} },
  { path: 'art', component: ArtGalleryComponent, data: {animation: 'left'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
