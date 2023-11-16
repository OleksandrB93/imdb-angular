import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LogoComponent } from './components/logo/logo.component';
import { FormsModule } from '@angular/forms';
import { LoaderInterceptorComponent } from './components/loader-interceptor/loader-interceptor.component';
import { PaginationButtonsComponent } from './components/pagination-buttons/pagination-buttons.component';
import { TrailerComponent } from './components/trailer/trailer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    GalleryComponent,
    MovieDetailsComponent,
    LogoComponent,
    LoaderInterceptorComponent,
    PaginationButtonsComponent,
    TrailerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
