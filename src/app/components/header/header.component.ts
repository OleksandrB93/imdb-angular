import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/types';
import { MovieDataServices } from 'src/app/services/movie-data-services.service';
import { GetMovieMyKeywordService } from 'src/app/services/movies/get-movie-my-keyword.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
@HostListener('window:scroll', [])
export class HeaderComponent {
  scrolled: boolean = false;
  keyword: string = '';
  searchList: Movie[] = [];

  constructor(
    private getMovieMyKeywordService: GetMovieMyKeywordService,
    private searchListService: MovieDataServices
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 0;
  }

  getMovieByKeyword() {
    this.getMovieMyKeywordService
      .getMovieByKeyword(this.keyword)
      .subscribe((data) => {
        this.searchList = data.results;

        this.searchListService.updateSearchList(this.searchList);
      });
  }
}
