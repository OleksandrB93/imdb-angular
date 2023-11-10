import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie } from 'src/app/model/types';
import { API_KEY, BASE_URI } from 'src/helpers/constants';

@Injectable({
  providedIn: 'root',
})
export class GetTrendMoviesService {
  constructor(private http: HttpClient) {}

  getTrendMovies(): Observable<Movie[]> {
    return this.http
      .get<{ results: Movie[] }>(
        `${BASE_URI}/trending/all/day?api_key=${API_KEY}`
      )
      .pipe(map((data) => data.results));
  }
}
