import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.sass'],
})
export class BurgerMenuComponent {
  @Input() isVisible!: boolean;
  @Output() menuItemClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  onMenuItemClick(): void {
    this.menuItemClicked.emit();
  }
}
