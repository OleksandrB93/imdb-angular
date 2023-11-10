import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Movie } from 'src/app/model/types';
import { PICTURE_URI_SMALL } from 'src/helpers/constants';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass'],
})
export class SliderComponent {
  @Input() list!: Movie[];

  constructor() {
    console.log("list:list",this.list);
  }

  pictureUriSmall: string = PICTURE_URI_SMALL;
}
