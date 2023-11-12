import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../model/types';

@Injectable({
  providedIn: 'root',
})
export class MovieDataServices {
  private searchListSubject = new BehaviorSubject<Movie[]>([]);
  public searchList$ = this.searchListSubject.asObservable();

  updateSearchList(searchList: Movie[]): void {
    this.searchListSubject.next(searchList);
  }

  constructor() {}
}
