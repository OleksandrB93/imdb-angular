import { Injectable } from '@angular/core';
import { API_KEY, BASE_URI } from 'src/helpers/constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, TV } from 'src/app/model/types';

@Injectable({
  providedIn: 'root',
})
export class GetMovieByIdService {
  constructor(private http: HttpClient) {}

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${BASE_URI}/movie/${id}?api_key=${API_KEY}`);
  }

  getSerialsById(id: number): Observable<TV> {
    return this.http.get<TV>(`${BASE_URI}/tv/${id}?api_key=${API_KEY}`);
  }
}
