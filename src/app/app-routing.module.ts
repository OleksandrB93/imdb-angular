import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { TvListComponent } from './components/tv-list/tv-list.component';
import { SerialsDetailsComponent } from './components/serials-details/serials-details.component';

const routes: Routes = [
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'tv', component: TvListComponent },
  { path: 'tv/:id', component: SerialsDetailsComponent },
  { path: 'movies', component: GalleryComponent },
  { path: ':id', component: MovieDetailsComponent },
  { path: '', component: GalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
