import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { GetTrendMoviesService } from 'src/app/services/movies/get-trend-movies.service';

@Component({
  selector: 'app-pagination-buttons',
  templateUrl: './pagination-buttons.component.html',
  styleUrls: ['./pagination-buttons.component.sass'],
})
export class PaginationButtonsComponent implements OnInit {
  constructor(private trendMoviesService: GetTrendMoviesService) {}

  ngOnInit(): void {
    this.trendMoviesService.page$.subscribe((page) => {});
  }

  prevPage() {
    this.trendMoviesService.page$.pipe(take(1)).subscribe((currentPage) => {
      if (currentPage > 1) {
        this.trendMoviesService.setPage(currentPage - 1);
      }
    });
  }

  nextPage() {
    this.trendMoviesService.page$.pipe(take(1)).subscribe((currentPage) => {
      if (currentPage < this.trendMoviesService.totalPages) {
        this.trendMoviesService.setPage(currentPage + 1);
      }
    });
  }
}
