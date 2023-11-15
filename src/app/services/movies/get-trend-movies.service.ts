import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap, tap } from 'rxjs';
import { Movie } from 'src/app/model/types';
import { API_KEY, BASE_URI } from 'src/helpers/constants';

@Injectable({
  providedIn: 'root',
})
export class GetTrendMoviesService {
  private pageSource = new BehaviorSubject<number>(1);
  page$ = this.pageSource.asObservable();
  totalPages: number = 0;

  constructor(private http: HttpClient) {}

  getTrendMovies(): Observable<Movie[]> {
    return this.page$.pipe(
      switchMap((page) => {
        const url = `${BASE_URI}/trending/all/day?api_key=${API_KEY}&page=${page}`;
        return this.http.get<{ results: Movie[]; total_pages: number }>(url);
      }),
      tap((data) => {
        this.totalPages = data.total_pages;
      }),
      map((data) => data.results)
    );
  }

  setPage(page: number) {
    this.pageSource.next(page);
  }
}
