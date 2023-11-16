import { Injectable } from '@angular/core';
import { Movie } from 'src/app/model/types';

@Injectable({
  providedIn: 'root',
})
export class WathlistService {
  private readonly WATCHLIST_KEY = 'watchlist';

  constructor() {}

  addToWatchlist(movie: Movie): void {
    const watchlist = this.getWatchlist();
    if (!watchlist.some((item) => item.id === movie.id)) {
      watchlist.push(movie);
      this.saveWatchlist(watchlist);
    }
  }

  removeFromWatchlist(movieId: number): void {
    const watchlist = this.getWatchlist();
    const index = watchlist.findIndex((movie) => movie.id === movieId);

    if (index !== -1) {
      watchlist.splice(index, 1);
      this.saveWatchlist(watchlist);
    }
  }

  getWatchlist(): Movie[] {
    const watchlistJson = localStorage.getItem(this.WATCHLIST_KEY);
    return watchlistJson ? JSON.parse(watchlistJson) : [];
  }

  private saveWatchlist(watchlist: Movie[]): void {
    const watchlistJson = JSON.stringify(watchlist);
    localStorage.setItem(this.WATCHLIST_KEY, watchlistJson);
  }
}
