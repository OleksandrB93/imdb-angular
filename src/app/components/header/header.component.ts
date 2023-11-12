import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
@HostListener('window:scroll', [])
export class HeaderComponent {
  scrolled: boolean = false;
  // constructor() {
  //   this.scrolled = window.scrollY > 20;
  // }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 20;
  }
}
