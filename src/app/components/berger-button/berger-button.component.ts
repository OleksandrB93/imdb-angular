import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-berger-button',
  templateUrl: './berger-button.component.html',
  styleUrls: ['./berger-button.component.sass'],
})
export class BergerButtonComponent {
  isVisible = false;

  constructor(private elementRef: ElementRef) {}

  onToggleButton() {
    this.isVisible = !this.isVisible;
  }

  closeMenu() {
    this.isVisible = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isVisible = false;
    }
  }

  onMenuItemClick(): void {
    this.closeMenu();
  }
}
