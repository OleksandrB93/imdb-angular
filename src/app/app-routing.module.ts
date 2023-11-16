import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';

const routes: Routes = [
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'serials', component: GalleryComponent },
  // { path: 'movies', component: GalleryComponent },
  { path: ':id', component: MovieDetailsComponent },
  { path: '', component: GalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
