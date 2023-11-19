import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';
import { LoaderInterceptorComponent } from './components/loader-interceptor/loader-interceptor.component';
import { PaginationButtonsComponent } from './components/pagination-buttons/pagination-buttons.component';
import { TrailerComponent } from './components/trailer/trailer.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { TvListComponent } from './components/tv-list/tv-list.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LoaderService } from './services/movies/loader-service.service';
import { LoadingInterceptor } from './interceptors/loading-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    GalleryComponent,
    MovieDetailsComponent,
    LoaderInterceptorComponent,
    PaginationButtonsComponent,
    TrailerComponent,
    WatchlistComponent,
    TvListComponent,
    // HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule.forRoot(),
    HeaderComponent,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
