import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TV } from 'src/app/model/types';
import { GetTopTvService } from 'src/app/services/movies/get-top-tv.service';
import { PICTURE_URI_SMALL } from 'src/helpers/constants';

@Component({
  selector: 'app-tv-list',
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.sass'],
})
export class TvListComponent implements OnInit {
  tvList: TV[] = [];
  pictureUriSmall=PICTURE_URI_SMALL

  constructor(private getTopTvService: GetTopTvService) {}

  ngOnInit(): void {
    this.getTopTvService.getTopTv().subscribe((data) => {
      this.tvList = data.results;
    });
  }
}
