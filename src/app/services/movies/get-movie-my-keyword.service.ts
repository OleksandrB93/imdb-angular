import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/types';
import { API_KEY, BASE_URI } from 'src/helpers/constants';

@Injectable({
  providedIn: 'root',
})
export class GetMovieMyKeywordService {
  constructor(private http: HttpClient) {}

  getMovieByKeyword(keyword: string): Observable<{ results: Movie[] }> {
    return this.http.get<{ results: Movie[] }>(
      `${BASE_URI}/search/movie?api_key=${API_KEY}&query=${keyword}`
    );
  }
}
