import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Movie } from 'src/app/model/types';
import { PICTURE_URI_BIG } from 'src/helpers/constants';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass'],
})
export class SliderComponent {
  @Input() list!: Movie[];

  constructor() {}

  pictureUriBig: string = PICTURE_URI_BIG;
}
