import { Component, OnInit } from '@angular/core';
import { PICTURE_URI_SMALL } from 'src/helpers/constants';
import { Movie } from 'src/app/model/types';
import { GetTrendMoviesService } from 'src/app/services/movies/get-trend-movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass'],
})
export class GalleryComponent implements OnInit {
  constructor(
    private trendMoviesService: GetTrendMoviesService,
    private router: Router
  ) {}

  list: Movie[] = [];
  pictureUriSmall: string = PICTURE_URI_SMALL;

  ngOnInit(): void {
    this.trendMoviesService.getTrendMovies().subscribe((data) => {
      this.list = data;
    });
  }
}
