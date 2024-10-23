import { Component } from '@angular/core';

@Component({
  selector: 'app-new-header',
  standalone: true,
  imports: [],
  templateUrl: './new-header.component.html',
  styleUrl: './new-header.component.scss',
})
export class NewHeaderComponent {
  hoveredItem: string | null = null;

  showDetails(item: string) {
    this.hoveredItem = item;
  }

  hideDetails() {
    this.hoveredItem = null;
  }
}
