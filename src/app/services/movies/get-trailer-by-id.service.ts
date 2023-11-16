import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieTrailer } from 'src/app/model/types';
import { API_KEY, BASE_URI } from 'src/helpers/constants';

@Injectable({
  providedIn: 'root',
})
export class GetTrailerByIdService {
  constructor(private http: HttpClient) {}

  getMovieTrailer(id: number) {
    return this.http.get<{ results: MovieTrailer[] }>(
      `${BASE_URI}/movie/${id}/videos?api_key=${API_KEY}`
    );
  }
}
