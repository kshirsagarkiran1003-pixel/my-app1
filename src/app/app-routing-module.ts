import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Team } from './pages/team/team';
import { Gallery } from './pages/gallery/gallery';
import { Contact } from './pages/contact/contact';
import { Path } from 'leaflet';
import { GalleryCollection } from './pages/gallery-collection/gallery-collection';
import { ImageDetail } from './pages/image-detail/image-detail';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'team', component: Team },
  { path: 'gallery', component: Gallery },
  { path: 'contact', component: Contact},
  { path:  'gallery-collection/:id',component:GalleryCollection },
  { path:  'image-detail', component:ImageDetail },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
