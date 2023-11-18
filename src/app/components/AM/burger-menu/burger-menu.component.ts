import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.sass',
})
export class BurgerMenuComponent {}
