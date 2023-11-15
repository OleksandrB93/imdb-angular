import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PICTURE_URI_SMALL } from 'src/helpers/constants';
import { Movie } from 'src/app/model/types';
import { GetTrendMoviesService } from 'src/app/services/movies/get-trend-movies.service';
import { Router } from '@angular/router';
import { MovieDataServices } from 'src/app/services/movie-data-services.service';
import { LoaderService } from 'src/app/services/movies/loader-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass'],
})
export class GalleryComponent implements OnInit {
  list: Movie[] = [];
  pictureUriSmall: string = PICTURE_URI_SMALL;
  isSearching: boolean = false;

  constructor(
    private trendMoviesService: GetTrendMoviesService,
    private searchListService: MovieDataServices,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.searchListService.searchList$.subscribe((searchList) => {
      if (searchList.length > 0) {
        this.list = searchList;
        this.isSearching = true;
      } else {
        this.loaderService.showLoader()
        this.trendMoviesService.getTrendMovies().subscribe((data) => {
          this.list = data;
          this.loaderService.hideLoader()
          this.isSearching = false;
        });
      }
    });
  }
}
