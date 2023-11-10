import { Injectable } from '@angular/core';
import { API_KEY, BASE_URI } from 'src/helpers/constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/types';

@Injectable({
  providedIn: 'root',
})
export class GetMovieByIdService {
  constructor(private http: HttpClient) {}

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${BASE_URI}/movie/${id}?api_key=${API_KEY}`);
  }
}
