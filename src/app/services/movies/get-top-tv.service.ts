import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TV } from 'src/app/model/types';
import { API_KEY, BASE_URI } from 'src/helpers/constants';

@Injectable({
  providedIn: 'root',
})
export class GetTopTvService {
  constructor(private http: HttpClient) {}

  getTopTv(): Observable<{ results: TV[] }> {
    const url = `${BASE_URI}/tv/top_rated?api_key=${API_KEY}&page=${1}`;

    return this.http.get<{ results: TV[] }>(url);
  }
}
