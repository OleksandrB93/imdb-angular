import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/types';
import { GetMovieByIdService } from 'src/app/services/movies/get-movie-by-id.service';
import { LoaderService } from 'src/app/services/movies/loader-service.service';
import { PICTURE_URI_SMALL } from 'src/helpers/constants';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass'],
})
export class MovieDetailsComponent implements OnInit {
  movie!: Movie;
  id!: number;
  pictureUri: string = PICTURE_URI_SMALL;
  constructor(
    private getMovieByIdService: GetMovieByIdService,
    private route: ActivatedRoute,
    private loaderService: LoaderService

  ) {}

  ngOnInit() {
    this.loaderService.showLoader();
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getMovieByIdService.getMovieById(this.id).subscribe((data) => {
      this.movie = data;
      this.loaderService.hideLoader();
    })
  }
}
