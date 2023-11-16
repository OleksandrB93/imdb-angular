import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieTrailer } from 'src/app/model/types';
import { GetTrailerByIdService } from 'src/app/services/movies/get-trailer-by-id.service';
import { TRAILER_URI } from 'src/helpers/constants';
@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.sass'],
})
export class TrailerComponent implements OnInit {
  id!: number;
  trailer!: MovieTrailer;
  trailerUri: string = TRAILER_URI;
  safeTrailerUrl!: SafeResourceUrl;

  constructor(
    private getTrailerByIdService: GetTrailerByIdService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getTrailerByIdService.getMovieTrailer(this.id).subscribe((data) => {
      this.trailer = data.results[0];

      this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `${this.trailerUri}${this.trailer.key}`
      );
    });
  }
}
