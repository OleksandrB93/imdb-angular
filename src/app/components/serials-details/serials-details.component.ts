import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TV } from 'src/app/model/types';
import { PICTURE_URI_SMALL } from 'src/helpers/constants';
import { GetMovieByIdService } from 'src/app/services/movies/get-movie-by-id.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serials-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serials-details.component.html',
  styleUrl: './serials-details.component.sass',
})
export class SerialsDetailsComponent implements OnInit {
  serial!: TV;
  id!: number;
  pictureUri = PICTURE_URI_SMALL;

  constructor(
    private getSerialsByIdService: GetMovieByIdService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getSerialsByIdService.getSerialsById(this.id).subscribe((data) => {
      this.serial = data;
    });
  }
}
