import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/types';
import { WathlistService } from 'src/app/services/movies/wathlist.service';
import { BASE_URI, PICTURE_URI_SMALL } from 'src/helpers/constants';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.sass'],
})
export class WatchlistComponent implements OnInit {
  watchlist: Movie[] = [];
  pictureUriSmall: string = PICTURE_URI_SMALL;

  constructor(private watchlistService: WathlistService) {}

  ngOnInit(): void {
    this.watchlist = this.watchlistService.getWatchlist();
  }

  removeFromWatchlist(movieId: number): void {
    this.watchlistService.removeFromWatchlist(movieId);
    this.watchlist = this.watchlistService.getWatchlist();
  }
}
